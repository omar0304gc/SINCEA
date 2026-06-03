import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private readonly urlBase = 'http://localhost:8000'; // URL del backend
  private readonly llavToken = 'sincea_token';
  private readonly llavRol = 'sincea_rol';

  constructor(private http: HttpClient, private router: Router) {}

  // Iniciar sesión
  iniciarSesion(matricula: string, contrasena: string): Observable<any> {
    return this.http.post(`${this.urlBase}/auth/login`, {
      matricula,
      contrasena
    }).pipe(
      tap((respuesta: any) => {
        localStorage.setItem(this.llavToken, respuesta.token);
        localStorage.setItem(this.llavRol, respuesta.rol);
      })
    );
  }

  // Cerrar sesión
  cerrarSesion(): void {
    localStorage.removeItem(this.llavToken);
    localStorage.removeItem(this.llavRol);
    this.router.navigate(['/login']);
  }

  // Verificar si hay sesión activa
  tieneSesion(): boolean {
    return !!localStorage.getItem(this.llavToken);
  }

  // Obtener el rol del usuario actual
  obtenerRol(): string | null {
    return localStorage.getItem(this.llavRol);
  }

  // Obtener el token
  obtenerToken(): string | null {
    return localStorage.getItem(this.llavToken);
  }
}
