import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Icono } from '../../../shared/components/icono/icono';
import { Edificio } from '../../../shared/components/tarjeta-edificio/tarjeta-edificio';


@Component({
  selector: 'app-detalle-edificio',
  standalone: true,
  imports: [CommonModule, Icono],
  templateUrl: './detalle-edificio.html',
  styleUrl: './detalle-edificio.scss'
})
export class DetalleEdificio implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  private apiUrl = 'http://localhost:3000/api/edificios';

  edificio: Edificio | null = null;
  cargando: boolean = true;

  ngOnInit() {
    const idEdificio = this.route.snapshot.paramMap.get('id');

    if (idEdificio) {
      this.cargarDatosDesdeBD(idEdificio);
    } else {
      this.cargando = false;
    }
  }

  cargarDatosDesdeBD(id: string) {
    this.cargando = true;

    this.http.get<any>(this.apiUrl).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          
          
          const edificioBD = response.data.find((e: any) => e.id === id);

          if (edificioBD) {
            
            this.edificio = {
              id: edificioBD.id, 
              nombre: edificioBD.nombre,
              imagen: edificioBD.imagen || '',
              descripcion: edificioBD.descripcion,
              ubicacion: edificioBD.ubicacion
            };
          } else {
            
            this.edificio = null;
          }
        }
        this.cargando = false;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error al conectar con la BD en detalles:', err);
        this.edificio = null;
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  regresar() {
    this.router.navigate(['/edificios']);
  }

  verEnMapa() {
    this.router.navigate(['/mapa']);
  }
}