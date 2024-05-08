// investment.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../Models/user/user'; // Assuming you have a User model
import { Investment } from '../Models/Investment/investment';



@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private baseurl = 'http://localhost:8084/Investment/investments';
  private apiUrl = 'http://localhost:8084/Investment';
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3aXNzb2JlamFvdWlAZ21haWwuY29tIiwiaWF0IjoxNzE1MTg4NzMyLCJleHAiOjE3MTUyNzUxMzJ9.CzdnH3GAroqhJPiMvbXQD0h7tCpoi3w0zjyLuUHpS1M'; // Replace 'your_token_here' with your actual token

  constructor(private http: HttpClient) { }

  addInvestment(investment: Investment, numberOfActions: number, idProject: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    const body = { numberOfActions }; // Assuming 'numberOfActions' is the key expected by the backend
    return this.http.post(`${this.baseurl}/${idProject}`, body, { headers });
  }
  findInvestorWithMostInvestment(): Observable<User> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get<User>(`${this.apiUrl}/most-investment`, { headers });
  }
}
