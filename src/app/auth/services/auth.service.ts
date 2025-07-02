import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LoginRequest,
  ReqiesterRequest,
} from '../../interfaces/auth.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {}

  login(payload: LoginRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, payload);
  }

  register(payload: ReqiesterRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, payload);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`,{});
  }
}
