import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Icono } from '../icono/icono';

export interface Profesor {
  id_maestro: number;
  nombre: string;
  usuario?: string;
  foto: string;
  departamento: string;
  cubiculo: string;
  edificio: string;
  contacto: string;
}

@Component({
  selector: 'app-tarjeta-profesor',
  imports: [CommonModule, Icono],
  templateUrl: './tarjeta-profesor.html',
  styleUrl: './tarjeta-profesor.scss'
})
export class TarjetaProfesor {
  @Input() profesor!: Profesor;

  constructor(private router: Router) {}

  verDetalle() {
    this.router.navigate(['/profesores', this.profesor.id_maestro]);
  }
}
