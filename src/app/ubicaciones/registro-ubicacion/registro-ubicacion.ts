import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-ubicacion',
  imports: [],
  templateUrl: './registro-ubicacion.html',
  styleUrl: './registro-ubicacion.css'
})
export class RegistroUbicacion {

  constructor(private router: Router) {}

  volverAlMapa() {
    this.router.navigate(['/mapa']);
  }

  verDetalle(nombreEdificio: string) {
    alert('Redirigiendo al detalle interno del: ' + nombreEdificio);
    this.router.navigate(['/ubicacion/detalle']);
  }
}