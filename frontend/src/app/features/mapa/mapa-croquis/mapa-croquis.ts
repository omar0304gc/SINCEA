import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icono } from '../../../shared/components/icono/icono';

@Component({
  selector: 'app-mapa-croquis',
  imports: [Icono],
  templateUrl: './mapa-croquis.html',
  styleUrl: './mapa-croquis.scss',
})
export class MapaCroquis {
  constructor(private router: Router) {}

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }
}

