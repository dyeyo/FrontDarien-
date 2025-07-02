import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HomeComponent],
  template: ` <app-home></app-home> `,
})
export class MainLayoutComponent {}
