import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaProfesor, Profesor } from '../../../shared/components/tarjeta-profesor/tarjeta-profesor';

@Component({
  selector: 'app-lista-profesores',
  imports: [CommonModule, TarjetaProfesor],
  templateUrl: './lista-profesores.html',
  styleUrl: './lista-profesores.scss'
})
export class ListaProfesores {

  // Datos de prueba — se reemplazarán con datos del backend
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
}