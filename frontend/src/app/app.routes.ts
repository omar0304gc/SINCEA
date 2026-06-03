import { Routes } from '@angular/router';
import { autenticacionGuard } from './core/guards/autenticacion-guard';
import { ContenedorPrincipal } from './layout/contenedor-principal/contenedor-principal';

export const routes: Routes = [
  // Ruta raíz → redirige a bienvenida
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },

  // Pantalla de bienvenida (pública)
  {
    path: 'bienvenida',
    loadComponent: () =>
      import('./features/autenticacion/pantalla-bienvenida/pantalla-bienvenida')
      .then(m => m.PantallaBienvenida)
  },

  // Login (público)
  {
    path: 'login',
    loadComponent: () =>
      import('./features/autenticacion/iniciar-sesion/iniciar-sesion')
      .then(m => m.IniciarSesion)
  },

  // Rutas protegidas — con navbar y sidebar
  {
    path: '',
    canActivate: [autenticacionGuard],
    component: ContenedorPrincipal,
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('./features/inicio/home/home')
          .then(m => m.Home)
      },
      {
        path: 'mapa',
        loadComponent: () =>
          import('./features/mapa/mapa-croquis/mapa-croquis')
          .then(m => m.MapaCroquis)
      },
      {
        path: 'profesores',
        loadComponent: () =>
          import('./features/profesores/lista-profesores/lista-profesores')
          .then(m => m.ListaProfesores)
      },
      {
        path: 'profesores/:id',
        loadComponent: () =>
          import('./features/profesores/detalle-profesor/detalle-profesor')
          .then(m => m.DetalleProfesor)
      },
      {
        path: 'mi-perfil',
        loadComponent: () =>
          import('./features/profesores/mi-perfil/mi-perfil')
          .then(m => m.MiPerfil)
      },
      {
        path: 'mi-perfil/editar',
        loadComponent: () =>
          import('./features/profesores/editar-perfil/editar-perfil')
          .then(m => m.EditarPerfil)
      },
      {
        path: 'horario',
        loadComponent: () =>
          import('./features/horario/ver-horario/ver-horario')
          .then(m => m.VerHorario)
      },
      {
        path: 'horario/editar',
        loadComponent: () =>
          import('./features/horario/editar-horario/editar-horario')
          .then(m => m.EditarHorario)
      },
      {
        path: 'edificios',
        loadComponent: () =>
          import('./features/edificios/lista-edificios/lista-edificios')
          .then(m => m.ListaEdificios)
      },
      {
        path: 'edificios/:id',
        loadComponent: () =>
          import('./features/edificios/detalle-edificio/detalle-edificio')
          .then(m => m.DetalleEdificio)
      }
    ]
  },

  // Cualquier ruta desconocida → bienvenida
  {
    path: '**',
    redirectTo: 'bienvenida'
  }
];