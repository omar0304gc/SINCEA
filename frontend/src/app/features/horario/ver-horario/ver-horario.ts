import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Icono } from '../../../shared/components/icono/icono';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

export interface BloqueHorario {
  id: string;
  materia: string;
  horaInicio: string;
  horaFin: string;
  indiceInicio: number;
  duracion: number;
}

export interface DiaHorario {
  nombre: string;
  clave: string;
  bloques: BloqueHorario[];
}

@Component({
  selector: 'app-ver-horario',
  imports: [CommonModule, FormsModule, Icono],
  templateUrl: './ver-horario.html',
  styleUrl: './ver-horario.scss'
})
export class VerHorario implements OnInit {
  private location = inject(Location);
  private cdr = inject(ChangeDetectorRef);
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);

private apiUrl = 'http://localhost:3000/api/horarios';

  slots: string[] = this.generarSlots();

  dias: DiaHorario[] = [
    { nombre: 'Lun', clave: 'lunes', bloques: [] },
    { nombre: 'Mar', clave: 'martes', bloques: [] },
    { nombre: 'Mié', clave: 'miercoles', bloques: [] },
    { nombre: 'Jue', clave: 'jueves', bloques: [] },
    { nombre: 'Vie', clave: 'viernes', bloques: [] },
  ];

  ngOnInit() {
  
  const idParam = this.route.snapshot.queryParamMap.get('profesorId');

  if (idParam) {
    
    this.cargarHorario(Number(idParam));
  } else {
  
    const usuario = JSON.parse(localStorage.getItem('usuario')!);
    if (usuario?.id_maestro) {
      this.cargarHorario(usuario.id_maestro);
    }
  }
}

cargarHorario(idProfesor: number) {

  this.http.get<any>(`${this.apiUrl}/${idProfesor}`).subscribe({

    next: (respuesta) => {

      if (respuesta.status !== 'success') return;

      this.dias.forEach(d => d.bloques = []);

      respuesta.data.forEach((clase: any) => {

        const dia = this.obtenerDia(clase.dia);

        if (!dia) return;

        const indiceInicio = this.obtenerIndice(clase.hora_inicio);

        const indiceFin = this.obtenerIndice(clase.hora_fin);

        dia.bloques.push({

          id: clase.id_horario.toString(),

          materia: clase.materia,

          horaInicio: clase.hora_inicio.substring(0,5),

          horaFin: clase.hora_fin.substring(0,5),

          indiceInicio,

          duracion: indiceFin - indiceInicio

        });

      });
      this.cdr.detectChanges();

    },

    error: (err) => {

      console.error(err);

    }

  });

}


obtenerDia(nombre: string): DiaHorario | undefined {

  const dias: any = {

    'Lunes':'lunes',
    'Martes':'martes',
    'Miércoles':'miercoles',
    'Jueves':'jueves',
    'Viernes':'viernes'

  };

  return this.dias.find(d => d.clave === dias[nombre]);

}

obtenerIndice(hora: string): number {

  const [h,m] = hora.split(':').map(Number);

  return (h - 8) * 2 + (m >= 30 ? 1 : 0);

}


  modalAbierto: boolean = false;
  diaSeleccionado: DiaHorario | null = null;
  indiceSeleccionado: number = 0;
  nuevaMateria: string = '';

  
  bloqueArrastrado: BloqueHorario | null = null;
  diaArrastrado: DiaHorario | null = null;
  offsetArrastre: number = 0; 
  slotDestino: number = -1;
  diaDestino: DiaHorario | null = null;

  constructor(private router: Router) {}

  generarSlots(): string[] {
    const slots: string[] = [];
    for (let h = 8; h < 18; h++) {
      slots.push(`${h.toString().padStart(2,'0')}:00`);
      slots.push(`${h.toString().padStart(2,'0')}:30`);
    }
    return slots;
  }

  slotOcupado(dia: DiaHorario, indice: number): BloqueHorario | null {
    return dia.bloques.find(b =>
      indice >= b.indiceInicio && indice < b.indiceInicio + b.duracion
    ) || null;
  }

  esInicio(dia: DiaHorario, indice: number): boolean {
    return dia.bloques.some(b => b.indiceInicio === indice);
  }

  esDestino(dia: DiaHorario, indice: number): boolean {
    if (!this.bloqueArrastrado || this.diaDestino !== dia) return false;
    const inicio = this.slotDestino - this.offsetArrastre;
    return indice >= inicio && indice < inicio + this.bloqueArrastrado.duracion;
  }

  abrirModal(dia: DiaHorario, indice: number) {
    if (this.slotOcupado(dia, indice)) return;
    this.diaSeleccionado = dia;
    this.indiceSeleccionado = indice;
    this.nuevaMateria = '';
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.diaSeleccionado = null;
    this.nuevaMateria = '';
  }

  agregarBloque() {
    if (!this.diaSeleccionado || !this.nuevaMateria.trim()) return;
    const horaInicio = this.slots[this.indiceSeleccionado];
    const horaFin = this.slots[this.indiceSeleccionado + 1] || '18:00';
    const bloque: BloqueHorario = {
      id: Date.now().toString(),
      materia: this.nuevaMateria.trim(),
      horaInicio,
      horaFin,
      indiceInicio: this.indiceSeleccionado,
      duracion: 1
    };
    this.diaSeleccionado.bloques.push(bloque);
    this.cerrarModal();
  }

  eliminarBloque(dia: DiaHorario, bloqueId: string, event: MouseEvent) {
    event.stopPropagation();
    dia.bloques = dia.bloques.filter(b => b.id !== bloqueId);
  }

  

  onDragStart(event: DragEvent, dia: DiaHorario, bloque: BloqueHorario, indiceSlot: number) {
    this.bloqueArrastrado = bloque;
    this.diaArrastrado = dia;
    this.offsetArrastre = indiceSlot - bloque.indiceInicio;
    event.dataTransfer?.setData('text', bloque.id);
  }

  onDragOver(event: DragEvent, dia: DiaHorario, indice: number) {
    event.preventDefault();
    this.slotDestino = indice;
    this.diaDestino = dia;
  }

  onDrop(event: DragEvent, dia: DiaHorario, indice: number) {
    event.preventDefault();
    if (!this.bloqueArrastrado || !this.diaArrastrado) return;

    const nuevoInicio = indice - this.offsetArrastre;
    const nuevoFin = nuevoInicio + this.bloqueArrastrado.duracion;

   
    if (nuevoInicio < 0 || nuevoFin > this.slots.length) return;

    
    const hayColision = dia.bloques.some(b => {
      if (b.id === this.bloqueArrastrado!.id) return false;
      return nuevoInicio < b.indiceInicio + b.duracion &&
             nuevoFin > b.indiceInicio;
    });
    if (hayColision) return;

    
    if (dia !== this.diaArrastrado) return;

    
    this.bloqueArrastrado.indiceInicio = nuevoInicio;
    this.bloqueArrastrado.horaInicio = this.slots[nuevoInicio];
    this.bloqueArrastrado.horaFin = this.slots[nuevoInicio + this.bloqueArrastrado.duracion] || '18:00';

    this.limpiarDrag();
  }

  onDragEnd() {
    this.limpiarDrag();
  }

  limpiarDrag() {
    this.bloqueArrastrado = null;
    this.diaArrastrado = null;
    this.slotDestino = -1;
    this.diaDestino = null;
    this.offsetArrastre = 0;
  }

  regresar() {
    this.location.back(); 
  }
}