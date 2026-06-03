import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Icono } from '../../../shared/components/icono/icono';
import { BotonTema } from '../../../shared/components/boton-tema/boton-tema';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [FormsModule, Icono, BotonTema],
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.scss'
})
export class IniciarSesion {
  curp: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    localStorage.setItem('sincea_token', 'token-simulado');
    localStorage.setItem('sincea_rol', 'alumno');
    this.router.navigate(['/inicio']);
  }
}
