import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
