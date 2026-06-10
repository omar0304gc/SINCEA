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
      nombre: 'M.C.C. OMAR NIEVA GARCÍA ',
      foto: '',
      departamento: 'Ingeniería en Computación',
      cubiculo: 'Cubículo 21',
      edificio: 'Edificio de Profesores',
      contacto: 'omarng@bianni.unistmo.edu.mx'
  };

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  editarPerfil() {
    this.router.navigate(['/mi-perfil/editar']);
  }

  verHorario() {
    this.router.navigate(['/horario']);
  }
}
