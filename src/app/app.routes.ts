import { Routes } from '@angular/router';
import { Login } from './autenticacion/login/login';
import { Croquis } from './mapa/croquis/croquis';
import { DetalleUbicacion } from './ubicaciones/detalle-ubicacion/detalle-ubicacion';
import { RegistroUbicacion } from './ubicaciones/registro-ubicacion/registro-ubicacion';
import { Bienvenida } from './autenticacion/bienvenida';
import { Inicio } from './inicio';

export const routes: Routes = [

  { path: '', component: Bienvenida },
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: 'login', component: Login },
  { path: 'inicio', component: Inicio },
  { path: 'mapa', component: Croquis },
  { path: 'ubicacion/detalle', component: DetalleUbicacion },
  { path: 'edificios', component: RegistroUbicacion },
  { path: 'profesores', component: DetalleUbicacion },
  
  // Cualquier otra ruta regresa al login
  { path: '**', redirectTo: '/inicio' }
];