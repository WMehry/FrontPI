import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user/user';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../Models/user/RegisterRequest';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  private baseUrl = 'http://localhost:8084/api/v1/admin';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/get/all'`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  addUser(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerRequest);
  }
}
