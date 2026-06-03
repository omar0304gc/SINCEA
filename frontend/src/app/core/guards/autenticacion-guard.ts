import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autenticacionGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('sincea_token');

  if (token) {
    return true; // tiene sesión → puede entrar
  }

  // no tiene sesión → regresa al login
  router.navigate(['/login']);
  return false;
};
