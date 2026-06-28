import { Component, OnInit, inject} from '@angular/core';
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

  profesor: Profesor = {
    id_maestro: 1,
      nombre: 'Ing. José María Arellanes Moreno',
      foto: '',
      departamento: 'Ingeniería en Computación',
      cubiculo: 'Cubículo 20',
      edificio: 'Edificio de Profesores',
      contacto: 'thunder6321@gmail.com'
  };

  ngOnInit() { 
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
