import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icono } from '../../../shared/components/icono/icono';

@Component({
  selector: 'app-pantalla-bienvenida',
  imports: [Icono],
  templateUrl: './pantalla-bienvenida.html',
  styleUrl: './pantalla-bienvenida.scss'
})
export class PantallaBienvenida {
  constructor(private router: Router) {}

  entrar() {
    this.router.navigate(['/login']);
  }
}
