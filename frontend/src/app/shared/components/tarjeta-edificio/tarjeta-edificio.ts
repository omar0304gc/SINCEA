import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface Edificio {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  ubicacion: string;
}

@Component({
  selector: 'app-tarjeta-edificio',
  imports: [CommonModule],
  templateUrl: './tarjeta-edificio.html',
  styleUrl: './tarjeta-edificio.scss'
})
export class TarjetaEdificio {
  @Input() edificio!: Edificio;

  constructor(private router: Router) {}

  verDetalle() {
    this.router.navigate(['/edificios', this.edificio.id]);
  }
}
