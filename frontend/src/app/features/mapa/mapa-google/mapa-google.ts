import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icono } from '../../../shared/components/icono/icono';

@Component({
  selector: 'app-mapa-google',
  imports: [Icono],
  templateUrl: './mapa-google.html',
  styleUrl: './mapa-google.scss'
})
export class MapaGoogle {
  constructor(private router: Router) {}

  irAlCroquis() {
    this.router.navigate(['/mapa']);
  }
}