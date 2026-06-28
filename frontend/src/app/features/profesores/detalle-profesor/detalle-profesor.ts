import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Icono } from '../../../shared/components/icono/icono';
import { Profesor } from '../../../shared/components/tarjeta-profesor/tarjeta-profesor';

@Component({
  selector: 'app-detalle-profesor',
  standalone: true,
  imports: [CommonModule, Icono],
  templateUrl: './detalle-profesor.html',
  styleUrl: './detalle-profesor.scss'
})
export class DetalleProfesor implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private apiUrl = 'http://localhost:3000/api/profesores/lista';

  profesor: any | null = null;

  ngOnInit() {
    
    const idParam = Number(this.route.snapshot.paramMap.get('id'));

    
    this.http.get<any>(this.apiUrl).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          
          this.profesor = response.data.find((p: any) => p.id_maestro === idParam) || null;
          
          
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        console.error('Error al obtener el detalle del profesor desde la BD:', err);
      }
    });
  }

  regresar() {
    this.router.navigate(['/profesores']);
  }

  verHorario() {
    this.router.navigate(['/horario'], { 
      queryParams: { profesorId: this.profesor?.id_maestro }
    });
  }
}
