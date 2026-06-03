import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemaService } from '../../../core/services/tema';
import { Icono } from '../icono/icono';

@Component({
  selector: 'app-boton-tema',
  imports: [CommonModule, Icono],
  templateUrl: './boton-tema.html',
  styleUrl: './boton-tema.scss'
})
export class BotonTema {
  constructor(public temaService: TemaService) {}

  alternar() {
    this.temaService.alternar();
  }
}