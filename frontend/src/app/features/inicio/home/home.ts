import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icono } from '../../../shared/components/icono/icono';

@Component({
  selector: 'app-home',
  imports: [Icono],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(private router: Router) {}

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }
}