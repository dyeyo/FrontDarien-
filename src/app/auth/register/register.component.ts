import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  submitted = false;

  fb = inject(FormBuilder);
  service = inject(AuthService);
  router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.matchPasswords }
    );
  }

  matchPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { mismatch: true };
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.invalid);
    if (this.registerForm.invalid) return;

    this.service.register(this.registerForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
