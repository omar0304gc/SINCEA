import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Icono } from '../../../shared/components/icono/icono';
import { Profesor } from '../../../shared/components/tarjeta-profesor/tarjeta-profesor';

@Component({
  selector: 'app-mi-perfil',
  imports: [CommonModule, Icono],
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.scss'
})
export class MiPerfil implements OnInit {

  profesor: Profesor = {
    id: 1,
    nombre: 'Dr. Juan Pérez García',
    foto: '',
    departamento: 'Ingeniería Industrial',
    cubiculo: 'Cubículo 3',
    edificio: 'Edificio de Posgrado',
    contacto: 'juan.perez@unistmo.edu.mx'
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Aquí se cargará el perfil desde el backend con el token
  }

  editarPerfil() {
    this.router.navigate(['/mi-perfil/editar']);
  }

  verHorario() {
    this.router.navigate(['/horario']);
  }
}
