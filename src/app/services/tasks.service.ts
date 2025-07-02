import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskRequest } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}

  getAllTasks(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/tasks?page=${page}`);
  }


  getOneTask(task: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/tasks/${task}`);
  }
  createTask(payload: TaskRequest): Observable<any> {
    console.log(payload);
    return this.http.post(`${this.baseUrl}/tasks`, payload);
  }

  updateTask(task: number, payload: TaskRequest): Observable<any> {
    return this.http.put(`${this.baseUrl}/tasks/${task}`, payload);
  }
  deleteTask(task: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tasks/${task}`);
  }
}
