import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-croquis',
  imports: [],
  templateUrl: './croquis.html',
  styleUrl: './croquis.css'
})
export class Croquis {
  isMenuOpen: boolean = false; // Estado del menú

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navegar(ruta: string) {
    this.isMenuOpen = false; // Cierra el menú al cambiar de sección
    this.router.navigate([ruta]);
  }
}