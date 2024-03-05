import { Routes } from '@angular/router';
import { authGuard } from './infrastructure/web/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./domain/views/home/home.component'),
  },
  {
    path: 'profil',
    children: [
      {
        path: '',
        // utiliser le resolveur ici
        loadComponent: () => import('./domain/views/users/users.component'),
      },
      {
        path: ':id',
        canActivate: [authGuard],
        // utiliser le resolveur ici
        loadComponent: () => import('./domain/views/profil/profil.component'),
      },
    ],
  },

  {
    path: 'login',
    loadComponent: () => import('./domain/views/login/login.component'),
  },

  {
    path: 'feed',
    loadComponent: () => import('./domain/views/feed/feed.component'),
  },
  {
    path: 'comments',
    loadComponent: () =>
      import('./domain/shared/forms/comment-form/comment-form.component'),
  },
];
