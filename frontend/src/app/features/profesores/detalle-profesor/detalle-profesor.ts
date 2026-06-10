import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Icono } from '../../../shared/components/icono/icono';
import { Profesor } from '../../../shared/components/tarjeta-profesor/tarjeta-profesor';

@Component({
  selector: 'app-detalle-profesor',
  imports: [CommonModule, Icono],
  templateUrl: './detalle-profesor.html',
  styleUrl: './detalle-profesor.scss'
})
export class DetalleProfesor implements OnInit {

  profesor: Profesor | null = null;

  
  profesores: Profesor[] = [
    {
      id: 1,
      nombre: 'M.C.C. OMAR NIEVA GARCÍA ',
      foto: '',
      departamento: 'Ingeniería en Computación',
      cubiculo: 'Cubículo 21',
      edificio: 'Edificio de Profesores',
      contacto: 'omarng@bianni.unistmo.edu.mx'
    },
    {
      id: 2,
      nombre: 'Dr. J. JESÚS ARELLANO PIMENTEL',
      foto: '',
      departamento: 'Ingeniería en Computación',
      cubiculo: 'Cubículo 18',
      edificio: 'Edificio de Profesores',
      contacto: 'jjap@sandunga.unistmo.edu.mx'
    },
    {
      id: 3,
      nombre: 'Ing. JOSÉ MARÍA ARELLANES MORENO',
      foto: '',
      departamento: 'Ingeniería en Computación',
      cubiculo: 'Cubículo 20',
      edificio: 'Edificio de Profesores',
      contacto: 'thunder6321@gmail.com'
    },
    {
      id: 4,
      nombre: 'Dr. DANIEL PACHECO BAUTISTA',
      foto: '',
      departamento: 'Ingeniería en Computación',
      cubiculo: 'Cubículo 15',
      edificio: 'Edificio de Profesores',
      contacto: 'dpachecob@bianni.unistmo.edu.mx'
    },
    {
      id: 5,
      nombre: 'Dra. GUADALUPE TOLEDO TOLEDO',
      foto: '',
      departamento: 'Ingeniería en Computación',
      cubiculo: 'Cubículo 28',
      edificio: 'Edificio de Profesores',
      contacto: 'gtoledo@sandunga.unistmo.edu.mx'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.profesor = this.profesores.find(p => p.id === id) || null;
  }

  regresar() {
    this.router.navigate(['/profesores']);
  }

  verHorario() {
    this.router.navigate(['/horario'], { 
      queryParams: { profesorId: this.profesor?.id }
    });
  }
}
