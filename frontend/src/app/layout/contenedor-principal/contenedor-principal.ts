import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacion } from '../barra-navegacion/barra-navegacion';
import { MenuLateral } from '../menu-lateral/menu-lateral';
import { AutenticacionService } from '../../core/services/autenticacion';

@Component({
  selector: 'app-contenedor-principal',
  imports: [RouterOutlet, BarraNavegacion, MenuLateral],
  templateUrl: './contenedor-principal.html',
  styleUrl: './contenedor-principal.scss'
})
export class ContenedorPrincipal {
  menuAbierto: boolean = false;
  rol: string = '';

  constructor(private authService: AutenticacionService) {
    this.rol = this.authService.obtenerRol() || 'alumno';
  }

  abrirMenu() {
    this.menuAbierto = true;
  }

  cerrarMenu() {
    this.menuAbierto = false;
  }
}
