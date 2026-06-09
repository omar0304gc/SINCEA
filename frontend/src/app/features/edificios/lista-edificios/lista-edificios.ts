import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaEdificio, Edificio } from '../../../shared/components/tarjeta-edificio/tarjeta-edificio';

@Component({
  selector: 'app-lista-edificios',
  imports: [CommonModule, TarjetaEdificio],
  templateUrl: './lista-edificios.html',
  styleUrl: './lista-edificios.scss'
})
export class ListaEdificios {

  edificios: Edificio[] = [
    {
      id: 1,
      nombre: 'Biblioteca',
      imagen: '',
      descripcion: 'Acervo bibliográfico y sala de lectura.',
      ubicacion: 'Biblioteca'
    },
    {
      id: 2,
      nombre: 'Auditorio',
      imagen: '',
      descripcion: 'Espacio para eventos y conferencias.',
      ubicacion: 'Auditorio'
    },
    {
      id: 3,
      nombre: 'Rectoría',
      imagen: '',
      descripcion: 'Oficinas administrativas principales.',
      ubicacion: 'Rectoria'
    },
    {
      id: 4,
      nombre: 'Laboratorio de Química',
      imagen: '',
      descripcion: 'Laboratorio de prácticas de química.',
      ubicacion: 'Laboratorio-de-quimica'
    },
    {
      id: 5,
      nombre: 'Salas de Cómputo',
      imagen: '',
      descripcion: 'Salas equipadas con computadoras.',
      ubicacion: 'Salas-de-computo'
    },
    {
      id: 6,
      nombre: 'Cubículos de Profesores',
      imagen: '',
      descripcion: 'Oficinas de atención a alumnos.',
      ubicacion: 'Cubiculos-de-profesores'
    },
    {
      id: 7,
      nombre: 'Edificio de Posgrado',
      imagen: '',
      descripcion: 'Aulas y oficinas de posgrado.',
      ubicacion: 'Edificio-de-posgrado'
    },
    {
      id: 8,
      nombre: 'Instituto de Energía',
      imagen: '',
      descripcion: 'Laboratorios de energías renovables.',
      ubicacion: 'Instituto-de-energia'
    }
  ];
}
