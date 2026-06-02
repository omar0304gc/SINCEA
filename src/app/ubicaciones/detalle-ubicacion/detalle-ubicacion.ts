import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-ubicacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-ubicacion.html',
  styleUrl: './detalle-ubicacion.css',
})
export class DetalleUbicacion {

  profesores = [
    {
      id: 1,
      nombre: 'DR. ALEJANDRO MARTÍNEZ',
      puesto: 'Docente de Tiempo Completo',
      cubiculo: 'Cubículo 4',
      edificio: 'Edificio E',
      contacto: 'alejandro.mtz@unistmo.edu.mx',
      foto: '👨‍🏫',
      horarioAsesorias: [
        { dia: 'Lunes', materia: 'Cálculo Diferencial', hora: '08:00 - 10:00', tipo: 'Clase' },
        { dia: 'Lunes', materia: 'Asesorías Académicas', hora: '12:00 - 14:00', tipo: 'Asesoría' },
        { dia: 'Martes', materia: 'Estructura de Datos', hora: '10:00 - 12:00', tipo: 'Clase' },
        { dia: 'Miércoles', materia: 'Asesorías Académicas', hora: '09:00 - 11:00', tipo: 'Asesoría' },
        { dia: 'Jueves', materia: 'Estructura de Datos', hora: '10:00 - 12:00', tipo: 'Clase' },
        { dia: 'Viernes', materia: 'Investigación', hora: '11:00 - 13:00', tipo: 'Investigación' }
      ]
    },
    {
      id: 2,
      nombre: 'MTRA. BEATRIZ ORDAZ',
      puesto: 'Jefa de Carrera — Computación',
      cubiculo: 'Jefatura A',
      edificio: 'Edificio A (Planta Alta)',
      contacto: 'beatriz.ordaz@unistmo.edu.mx',
      foto: '👩‍🏫',
      horarioAsesorias: [
        { dia: 'Martes', materia: 'Asesorías Proyectos', hora: '16:00 - 18:00', tipo: 'Asesoría' },
        { dia: 'Jueves', materia: 'Ingeniería de Software', hora: '08:00 - 10:00', tipo: 'Clase' }
      ]
    }
  ];

  profesorSeleccionado: any = null;
  mostrarModalHorario: boolean = false;
  vistaDetalle: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  verPerfil(profe: any) {
    this.profesorSeleccionado = profe;
    this.vistaDetalle = true;
  }

  regresarALista() {
    this.vistaDetalle = false;
    this.profesorSeleccionado = null;
  }

  abrirHorario() {
    this.mostrarModalHorario = true;
  }

  cerrarHorario() {
    this.mostrarModalHorario = false;
  }

  volverAlMenuPrincipal() {
    this.router.navigate(['/inicio']);
  }

}
