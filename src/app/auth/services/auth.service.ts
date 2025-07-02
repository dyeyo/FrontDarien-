import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LoginRequest,
  ReqiesterRequest,
} from '../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}

  login(payload: LoginRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, payload);
  }

  register(payload: ReqiesterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, payload);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`,{});
  }
}
