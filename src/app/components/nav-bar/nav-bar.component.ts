import { Component, inject } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  imports: [TasksComponent, NgIf, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  router = inject(Router);
  service = inject(AuthService);

  showSidebar = false;
  showUserMenu = false;
  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  closeUserMenu() {
    setTimeout(() => {
      this.showUserMenu = false;
    }, 150);
  }

  logout() {
    this.service.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        console.error('Logout failed', error);
      },
    });
  }
}
