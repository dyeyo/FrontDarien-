import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthLayoutComponent } from './auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registro',
        component: RegisterComponent,
      },
    ],
  },
];
