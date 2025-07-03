import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import flashy from '@pablotheblink/flashyjs';

@Component({
  selector: 'app-modal-form',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css',
})
export class ModalFormComponent implements OnInit {
  @Input() title = '';
  @Input() data: {
    id?: number;
    title?: string;
    description?: string;
    due_date?: string;
    completed?: string;
  } = {};

  taskForm!: FormGroup;
  submitted = false;

  fb = inject(FormBuilder);
  service = inject(TasksService);
  router = inject(Router);

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      due_date: ['', [Validators.required]],
      completed: [{ value: '', disabled: Object.keys(this.data).length === 0 }],
    });
    this.loadData();
  }

  get f() {
    return this.taskForm.controls;
  }

  loadData() {
    if (this.data && Object.keys(this.data).length > 0) {
      this.taskForm.patchValue({
        title: this.data.title,
        description: this.data.description,
        due_date: this.data.due_date,
        completed: this.data.completed,
      });
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.taskForm.invalid) return;
    const id = this.data.id;
    if (this.taskForm.value.completed) {
      this.taskForm.patchValue({ completed: 1 });
    } else {
      this.taskForm.patchValue({ completed: 0 });
    }
    console.log(this.taskForm.value);
    if (id) {
      this.service.updateTask(id, this.taskForm.value).subscribe({
        next: (response) => {
          this.activeModal.close('success');
          flashy.success('¡Tarea actualizada exitosamente!');
          this.taskForm.reset();
        },
        error: (error) => {
          flashy.error('Algo va mal, vuelva a intentarlo');
        },
      });
    } else {
      this.service.createTask(this.taskForm.value).subscribe({
        next: (response) => {
          this.activeModal.close('success');
          flashy.success('¡Tarea actualziada exitosamente!');
          this.taskForm.reset();
        },
        error: (error) => {
          flashy.error('Algo va mal, vuelva a intentarlo');
        },
      });
    }
  }
}
