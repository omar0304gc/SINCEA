import { Component, OnInit, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Icono } from '../../../shared/components/icono/icono';
import { Profesor } from '../../../shared/components/tarjeta-profesor/tarjeta-profesor';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [CommonModule, Icono],
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.scss'
})
export class MiPerfil implements OnInit {
  private router = inject(Router);
  private location = inject(Location);

  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  private apiUrl = 'http://localhost:3000/api/profesores';

  private idProfesor = 0;
  profesor!: Profesor;


  ngOnInit() {

    const usuario = JSON.parse(localStorage.getItem('usuario')!);

    this.idProfesor = usuario.id_maestro;

    this.http.get<any>(`${this.apiUrl}/${this.idProfesor}`).subscribe({

      next: (respuesta) => {

        if (respuesta.status === 'success') {

          this.profesor = respuesta.data;

          this.cdr.detectChanges();

        }

      },

      error: err => console.error(err)

    });

  }

  regresar() {
    this.location.back(); 
  }

  editarPerfil() {
    this.router.navigate(['/mi-perfil/editar']);
  }

  cambiarFoto() {
    console.log('Abrir selector de archivos para cambiar foto...');
  }

  verHorario() {
    this.router.navigate(['/horario'], {
      queryParams: {profesorId: this.profesor.id_maestro }
    });
  }
}
