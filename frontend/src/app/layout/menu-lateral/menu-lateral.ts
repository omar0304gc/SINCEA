import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Icono } from '../../shared/components/icono/icono';
import { AutenticacionService } from '../../core/services/autenticacion';

@Component({
  selector: 'app-menu-lateral',
  imports: [RouterLink, RouterLinkActive, CommonModule, Icono],
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.scss'
})
export class MenuLateral {
  @Input() abierto: boolean = false;
  @Input() rol: string = 'alumno';
  @Output() cerrar = new EventEmitter<void>();

  constructor(private authService: AutenticacionService) {}

  onCerrar() {
    this.cerrar.emit();
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
    this.cerrar.emit();
  }
}