import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <router-outlet />
      </div>
    </div>
  `,
})
export class AuthLayoutComponent {}
