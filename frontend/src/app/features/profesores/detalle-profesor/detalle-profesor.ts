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

  // Datos de prueba — mismos que en lista
  profesores: Profesor[] = [
    {
      id: 1,
      nombre: 'Dr. Juan Pérez García',
      foto: '',
      departamento: 'Ingeniería Industrial',
      cubiculo: 'Cubículo 3',
      edificio: 'Edificio de Posgrado',
      contacto: 'juan.perez@unistmo.edu.mx'
    },
    {
      id: 2,
      nombre: 'Mtra. Ana López Ruiz',
      foto: '',
      departamento: 'Sistemas Computacionales',
      cubiculo: 'Cubículo 7',
      edificio: 'Cubículos de Profesores',
      contacto: 'ana.lopez@unistmo.edu.mx'
    },
    {
      id: 3,
      nombre: 'Ing. Carlos Mendoza',
      foto: '',
      departamento: 'Ingeniería Química',
      cubiculo: 'Cubículo 1',
      edificio: 'Cubículos de Profesores',
      contacto: 'carlos.mendoza@unistmo.edu.mx'
    },
    {
      id: 4,
      nombre: 'Dra. María Santana Cruz',
      foto: '',
      departamento: 'Energías Renovables',
      cubiculo: 'Cubículo 5',
      edificio: 'Instituto de Energía',
      contacto: 'maria.santana@unistmo.edu.mx'
    },
    {
      id: 5,
      nombre: 'Mtro. Roberto Díaz',
      foto: '',
      departamento: 'Diseño Industrial',
      cubiculo: 'Cubículo 2',
      edificio: 'Talleres de Diseño',
      contacto: 'roberto.diaz@unistmo.edu.mx'
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
