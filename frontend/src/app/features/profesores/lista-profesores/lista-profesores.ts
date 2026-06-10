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
}