import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; // 👈 Importamos OnInit e inject
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; // 👈 Importamos HttpClient para conectar con Node
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

export class ListaEdificios implements OnInit { // 👈 Implementamos la interfaz OnInit

  // Inyectamos el servicio HttpClient de Angular
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  
  // URL de nuestro endpoint general de edificios en Node.js
  private apiUrl = 'http://localhost:3000/api/edificios';

  // Inicializamos el arreglo vacío. Ahora se llenará con lo que devuelva la BD
  edificios: Edificio[] = [];

  // Ejecutamos la carga automática al montar la pantalla
  ngOnInit(): void {
    this.obtenerEdificios();
  }

  // Método para traer la lista de infraestructura desde el Backend
  obtenerEdificios(): void {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          // Asignamos las filas de MySQL directamente a tu tabla visual
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