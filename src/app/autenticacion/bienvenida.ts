import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  imports: [], // No requiere módulos pesados
  templateUrl: './bienvenida.html',
  styleUrl: './bienvenida.css'
})
export class Bienvenida {
  constructor(private router: Router) {}

  irAlLogin() {
    this.router.navigate(['/login']); // Redirección formal al Iniciar Sesión
  }
}