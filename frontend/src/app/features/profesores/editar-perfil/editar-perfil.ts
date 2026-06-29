import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Icono } from '../../../shared/components/icono/icono';
import { HttpClient } from '@angular/common/http';

interface FormularioPerfil {
  nombre: string;
  contacto: string;
  departamento: string;
  edificio: string;
  cubiculo: string;
}


@Component({
  selector: 'app-editar-perfil',
  imports: [CommonModule, FormsModule, Icono],
  templateUrl: './editar-perfil.html',
  styleUrl: './editar-perfil.scss'
})
export class EditarPerfil implements OnInit {

  private http = inject(HttpClient);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  private apiUrl = 'http://localhost:3000/api/profesores';
  private idProfesor = 0;

  

  formulario: FormularioPerfil = {
    nombre: '',
    contacto: '',
    departamento: '',
    edificio: '',
    cubiculo: ''
  };

  edificios: string[] = [
    'Edificio de Posgrado',
    'Cubículos de Profesores',
    'Instituto de Energía',
    'Talleres de Diseño',
    'Laboratorio de Electrónica',
    'Vicerrectoría Académica',
    'Vicerrectoría Administrativa',
    'Departamento de Profesores'
  ];


  ngOnInit() {

  const usuario = JSON.parse(localStorage.getItem('usuario')!);

  this.idProfesor = usuario.id_maestro;

  this.http.get<any>(`${this.apiUrl}/${this.idProfesor}`).subscribe({

      next: (respuesta) => {

        if (respuesta.status === 'success') {

          this.formulario = {
            nombre: respuesta.data.nombre,
            contacto: respuesta.data.contacto,
            departamento: respuesta.data.departamento,
            edificio: respuesta.data.edificio,
            cubiculo: respuesta.data.cubiculo
          };

this.cdr.detectChanges();

        }

      },

      error: err => console.error(err)

    });

  }

  guardar() {

    this.http.put<any>(
        `${this.apiUrl}/${this.idProfesor}`,
        this.formulario
    ).subscribe({

        next: () => {

            alert('Perfil actualizado correctamente.');

            this.router.navigate(['/mi-perfil']);

        },

        error: err => {

            console.error(err);

            alert('No se pudo actualizar el perfil.');

        }

    });

  }

  cancelar() {
    this.router.navigate(['/mi-perfil']);
  }
}
