import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usuario: string = '';
  contrasena: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  async alIngresar() {
    this.errorMessage = '';

    if (!this.usuario.trim() || !this.contrasena.trim()) {
      this.errorMessage = 'Por favor, llena todos los campos.';
      return;
    }

    const credenciales = {
      usuario: this.usuario.trim(),
      contrasena: this.contrasena.trim()
    };

    try {
      // Usamos fetch directo a tu archivo de XAMPP
      const respuestaServidor = await fetch('http://127.0.0.1/sincea-backend/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credenciales)
      });

      const datos = await respuestaServidor.json();
      console.log('Datos validados por MySQL:', datos);

      if (datos.status === 'success') {
        // Guardamos rol y nombre obtenidos de la BD
        localStorage.setItem('userRole', datos.role);
        localStorage.setItem('userName', datos.nombre);
        
        // Redirección al mapa
        this.router.navigate(['/inicio']);
      } else {
        this.errorMessage =  datos.message;
      }

    } catch (error) {
      console.error('Error de red:', error);
      this.errorMessage = 'Error de conexión con la Base de Datos. Verifica que Apache y MySQL estén en verde en XAMPP.';
    }
  }
}