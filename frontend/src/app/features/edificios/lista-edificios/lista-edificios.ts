import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TarjetaEdificio } from '../../../shared/components/tarjeta-edificio/tarjeta-edificio';

export interface Edificio {
  id?: number;
  nombre: string;
  ubicacion: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-lista-edificios',
  standalone: true,
  imports: [CommonModule, FormsModule, TarjetaEdificio],
  templateUrl: './lista-edificios.html',
  styleUrl: './lista-edificios.scss'
})

export class ListaEdificios implements OnInit {

  
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  
  
  private apiUrl = 'http://localhost:3000/api/edificios';

  
  edificios: Edificio[] = [];

  
  ngOnInit(): void {
    this.obtenerEdificios();
  }

  
  obtenerEdificios(): void {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          
          this.edificios = response.data.map((edif: any) => ({
            ...edif,
            imagen: edif.imagen || ''
          }));
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        console.error('Error al conectar con la API de edificios:', err);
      }
    });
  }
}