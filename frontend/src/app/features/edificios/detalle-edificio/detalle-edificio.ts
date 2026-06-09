import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Icono } from '../../../shared/components/icono/icono';
import { Edificio } from '../../../shared/components/tarjeta-edificio/tarjeta-edificio';

@Component({
  selector: 'app-detalle-edificio',
  imports: [CommonModule, Icono],
  templateUrl: './detalle-edificio.html',
  styleUrl: './detalle-edificio.scss'
})
export class DetalleEdificio implements OnInit {

  edificio: Edificio | null = null;

  edificios: Edificio[] = [
    {
      id: 1,
      nombre: 'Biblioteca',
      imagen: '',
      descripcion: 'Acervo bibliográfico y sala de lectura para estudiantes y docentes.',
      ubicacion: 'Biblioteca'
    },
    {
      id: 2,
      nombre: 'Auditorio',
      imagen: '',
      descripcion: 'Espacio para eventos académicos, conferencias y ceremonias.',
      ubicacion: 'Auditorio'
    },
    {
      id: 3,
      nombre: 'Rectoría',
      imagen: '',
      descripcion: 'Oficinas administrativas principales del campus.',
      ubicacion: 'Rectoria'
    },
    {
      id: 4,
      nombre: 'Laboratorio de Química',
      imagen: '',
      descripcion: 'Laboratorio equipado para prácticas de química general y analítica.',
      ubicacion: 'Laboratorio-de-quimica'
    },
    {
      id: 5,
      nombre: 'Salas de Cómputo',
      imagen: '',
      descripcion: 'Salas equipadas con computadoras para uso académico.',
      ubicacion: 'Salas-de-computo'
    },
    {
      id: 6,
      nombre: 'Cubículos de Profesores',
      imagen: '',
      descripcion: 'Oficinas de atención a alumnos por parte del cuerpo docente.',
      ubicacion: 'Cubiculos-de-profesores'
    },
    {
      id: 7,
      nombre: 'Edificio de Posgrado',
      imagen: '',
      descripcion: 'Aulas y oficinas dedicadas a los programas de posgrado.',
      ubicacion: 'Edificio-de-posgrado'
    },
    {
      id: 8,
      nombre: 'Instituto de Energía',
      imagen: '',
      descripcion: 'Laboratorios de investigación en energías renovables.',
      ubicacion: 'Instituto-de-energia'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.edificio = this.edificios.find(e => e.id === id) || null;
  }

  regresar() {
    this.router.navigate(['/edificios']);
  }

  verEnMapa() {
    this.router.navigate(['/mapa']);
  }
}