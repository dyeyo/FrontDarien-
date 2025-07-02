import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout.component';
import { authGuard } from '../auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
