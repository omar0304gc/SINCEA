import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Icono } from '../../../shared/components/icono/icono';

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

  constructor(private router: Router) {}

  ngOnInit() {

    this.formulario = {
      nombre: 'Ing. JOSÉ MARÍA ARELLANES',
      contacto: 'thunder6321@gmail.com',
      departamento: 'Ingeniería en Computación',
      edificio: 'Edificio de Profesores',
      cubiculo: 'Cubículo 20'
    };
  }

  guardar() {
    
    console.log('Guardando:', this.formulario);
    this.router.navigate(['/mi-perfil']);
  }

  cancelar() {
    this.router.navigate(['/mi-perfil']);
  }
}
