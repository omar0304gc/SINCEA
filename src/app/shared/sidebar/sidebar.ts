import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  constructor(private router: Router) {}

  // Esta función garantiza que Angular busque la ruta interna en lugar de recargar la página web
  redirigirA(ruta: string) {
    this.router.navigate([ruta]);
    this.cerrarSidebar(); // O la lógica que uses para ocultar la barra tras hacer clic
  }

  cerrarSidebar() {
    // Tu lógica actual para cerrar/ocultar el menú desplegable
  }

  salir() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
