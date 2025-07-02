import { NgIf } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import flashy from '@pablotheblink/flashyjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;

  fb = inject(FormBuilder);
  service = inject(AuthService);
  router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) return;

    this.service.login(this.loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        flashy.error('Credenciales inválidas');
      },
    });
  }
}
