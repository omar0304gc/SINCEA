import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icono } from '../../shared/components/icono/icono';
import { BotonTema } from '../../shared/components/boton-tema/boton-tema';

@Component({
  selector: 'app-barra-navegacion',
  imports: [RouterLink, RouterLinkActive, Icono, BotonTema],
  templateUrl: './barra-navegacion.html',
  styleUrl: './barra-navegacion.scss'
})
export class BarraNavegacion {
  @Output() abrirMenu = new EventEmitter<void>();

  onAbrirMenu() {
    this.abrirMenu.emit();
  }
}
