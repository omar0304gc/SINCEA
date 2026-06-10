import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private readonly llave = 'sincea_tema';
  private temaOscuro: boolean = false;

  constructor() {
    
    const guardado = localStorage.getItem(this.llave);
    if (guardado) {
      this.temaOscuro = guardado === 'oscuro';
    } else {
      
      this.temaOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.aplicarTema();
  }

  estaOscuro(): boolean {
    return this.temaOscuro;
  }

  alternar() {
    this.temaOscuro = !this.temaOscuro;
    localStorage.setItem(this.llave, this.temaOscuro ? 'oscuro' : 'claro');
    this.aplicarTema();
  }

  private aplicarTema() {
    const html = document.documentElement;
    if (this.temaOscuro) {
      html.setAttribute('data-theme', 'oscuro');
    } else {
      html.removeAttribute('data-theme');
    }
  }
}