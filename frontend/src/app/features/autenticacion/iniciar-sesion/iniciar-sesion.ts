import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Icono } from '../../../shared/components/icono/icono';
import { BotonTema } from '../../../shared/components/boton-tema/boton-tema';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [FormsModule, CommonModule, Icono, BotonTema],
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.scss'
})
export class IniciarSesion {
  usuario: string = '';
  contrasena: string = '';

  errorMessage: string = '';

  private apiUrl = 'http://localhost:3000/api/auth/login';

  constructor(private router: Router, private http: HttpClient) {}

  iniciarSesion() {
    this.errorMessage = '';

    
    if (!this.usuario.trim() || !this.contrasena.trim()) {
      this.errorMessage = 'Por favor, rellene todos los campos.';
      return;
    }

  
    const cuerpoPeticion = {
      usuario: this.usuario.trim(),
      contrasena: this.contrasena.trim()
    };

    
    this.http.post<any>(this.apiUrl, cuerpoPeticion).subscribe({
      next: (respuesta) => {
        if (respuesta.status === 'success') {
          
          localStorage.setItem('sincea_token', 'token-simulado'); 
          localStorage.setItem('sincea_rol', respuesta.alumno.rol); 
          
          
          localStorage.setItem('userName', respuesta.alumno.nombre); 

          
          this.router.navigate(['/inicio']);
        } else {
          
          this.errorMessage = respuesta.message;
        }
      },
      error: (err) => {
        
        this.errorMessage = 'No se pudo conectar con la base de datos. Verifica la base de datos.';
        console.error('Error de conexión:', err);
      }
    });
  }
}
