import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskRequest } from '../interfaces/task.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAllTasks(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks?page=${page}`);
  }

  getOneTask(task: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks/${task}`);
  }
  createTask(payload: TaskRequest): Observable<any> {
    console.log(payload);
    return this.http.post(`${this.apiUrl}/tasks`, payload);
  }

  updateTask(task: number, payload: TaskRequest): Observable<any> {
    return this.http.put(`${this.apiUrl}/tasks/${task}`, payload);
  }
  deleteTask(task: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tasks/${task}`);
  }
}
