import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.router').then((m) => m.routes),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.router').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
