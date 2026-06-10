import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio implements OnInit {
  userRole: string | null = '';
  userName: string | null = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Recuperamos los datos de quien inició sesión desde la BD
    this.userRole = localStorage.getItem('userRole');
    this.userName = localStorage.getItem('userName');
 
  }

  navegarA(ruta: string) {
    this.router.navigate([`/${ruta}`]);
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}