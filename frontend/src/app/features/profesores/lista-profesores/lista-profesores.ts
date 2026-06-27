import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { TarjetaProfesor, Profesor } from '../../../shared/components/tarjeta-profesor/tarjeta-profesor';

@Component({
  selector: 'app-lista-profesores',
  imports: [CommonModule, TarjetaProfesor],
  templateUrl: './lista-profesores.html',
  styleUrl: './lista-profesores.scss'
})
export class ListaProfesores implements OnInit { 

  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  
  private apiUrl = 'http://localhost:3000/api/profesores/lista';

  profesores: Profesor[] = [];

  ngOnInit(): void {
    this.cargarProfesores();
  }

  cargarProfesores(): void {
    
    this.http.get<any>(this.apiUrl).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          
          this.profesores = response.data;
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        console.error('Error al conectar con la API de profesores:', err);
      }
    });
  }
}