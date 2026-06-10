import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Icono } from '../../../shared/components/icono/icono';

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
export class VerHorario {

  slots: string[] = this.generarSlots();

  dias: DiaHorario[] = [
    { nombre: 'Lun', clave: 'lunes', bloques: [] },
    { nombre: 'Mar', clave: 'martes', bloques: [] },
    { nombre: 'Mié', clave: 'miercoles', bloques: [] },
    { nombre: 'Jue', clave: 'jueves', bloques: [] },
    { nombre: 'Vie', clave: 'viernes', bloques: [] },
  ];


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
    this.router.navigate(['/mi-perfil']);
  }
}