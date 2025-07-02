import { Component, inject } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { TasksService } from '../../services/tasks.service';
import { TaskRespose } from '../../interfaces/task.interface';
import { ToastrService } from 'ngx-toastr';
import flashy from '@pablotheblink/flashyjs';

@Component({
  selector: 'app-tasks',
  imports: [TableComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  service = inject(TasksService);
  page: number = 1;
  isLoading = false;
  countComplete: number = 0;
  totalTask: number = 0;
  countPending: number = 0;
  listTask: TaskRespose[] = [];
  constructor() {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks($event?: any): void {
    this.isLoading = true;
    const currentPage = $event == 1 ? (this.page += 1) : (this.page -= 1);
    this.service.getAllTasks(currentPage).subscribe({
      next: (response) => {
        this.countComplete = response.countComplete;
        this.countPending = response.countNoComplete;
        this.listTask = response.tasks.data;
        this.totalTask = response.tasks.total;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        flashy.error('Algo va mal, vuelva a intentarlo');
      },
    });
  }

  deleteTask($event?: any): void {
    this.service.deleteTask($event).subscribe({
      next: (response) => {
        flashy.success('¡Tarea  eliminada!');
        this.getTasks();
      },
      error: (error) => {
        flashy.error('Algo va mal, vuelva a intentarlo');
      },
    });
  }
}
