import { Injectable } from '@angular/core';
import { Project } from '../Models/Project/project';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:8084/project';
  
  private baseurl1 = 'http://localhost:8084/project/delete';
  
  private token =
'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3aXNzb2JlamFvdWlAZ21haWwuY29tIiwiaWF0IjoxNzE1MTc4MTM2LCJleHAiOjE3MTUyNjQ1MzZ9.gf8qDoBa6xdta8n_OyYj--dGRXvnBBD1fv4LMeVgg30'; 


  constructor(private http:HttpClient) { }
  
getAllProject(): Observable<Project[]> {
  const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
  return this.http.get<Project[]>(this.apiUrl+'/retrieve-all-projects', { headers })
    .pipe(
      catchError((error: any) => {
        console.error('Error fetching offers:', error);
        return throwError('Something went wrong, please try again later.');
      })
    );
}


  addProject(Project: Object): Observable<Object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` // Ensure this.token holds the valid JWT token
  });

    return this.http.post(`${this.apiUrl}/projects`, Project,{ headers: headers });
  }
  /*addProject(project: Project): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` // Ensure this.token holds the valid JWT token
  });
    return this.http.post(`${this.baseUrl2}`, Shareholder,{ headers: headers });
  }*/
 /* validateProject(projectId: number): Observable<void> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'
    });
  
    return this.http.put<void>(`${this.apiUrl}/validateProject?projectId=${projectId}`, {}, { headers }).pipe(
      catchError((error: any) => {
        console.error('Error validating project:', error);
        return throwError('Something went wrong, please try again later.');
      })
    );
  }*/
  validateProject(projectId: number): Observable<void> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'
    });
  
    return this.http.put<void>(`${this.apiUrl}/validateProject?projectId=${projectId}`, {}, { headers }).pipe(
      catchError((error: any) => {
        console.error('Error validating project:', error);
        return throwError('Something went wrong, please try again later.');
      })
    );
  }
  
  
  deleteProject(idProject: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  });
  
    return this.http.delete(`${this.baseurl1}/${idProject}`,  { responseType: 'text' , headers: headers});
  }

  rateProject(projectId: number, rating: number, feedback: string): Observable<void> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });

    const body = {
      rating: rating,
      feedback: feedback
    };

    return this.http.post<void>(`${this.apiUrl}/${projectId}/rate`, body, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error rating project:', error);
          return throwError('Something went wrong, please try again later.');
        })
      );
  }
  getMostInvestedCategories(): Observable<Map<string, number>> {
    const headers = { 'Authorization': `Bearer ${this.token}` };

    return this.http.get<Map<string, number>>(`${this.apiUrl}/most-invested`, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching most invested categories:', error);
          return throwError('Something went wrong, please try again later.');
        })
      );
  }
  calculateAverageInvestmentValue(): Observable<number> {
    return this.getAllProject().pipe(
      catchError((error: any) => {
        console.error('Error calculating average investment value:', error);
        return throwError('Something went wrong, please try again later.');
      }),
      map((projects: Project[]) => {
        if (projects.length === 0) {
          return 0;
        }
        const totalInvestmentValue = projects.reduce((acc, curr) => acc + curr.total_raising_investment, 0);
        return totalInvestmentValue / projects.length;
      })
    );
  }
  
  findProjectWithHighestInvestment(projects: Project[]): Project | null {
    if (!projects || projects.length === 0) {
      return null;
    }
    return projects.reduce((prev, current) => (prev.total_raising_investment > current.total_raising_investment) ? prev : current);
  }

  findProjectWithLowestInvestment(projects: Project[]): Project | null {
    if (!projects || projects.length === 0) {
      return null;
    }
    return projects.reduce((prev, current) => (prev.total_raising_investment < current.total_raising_investment) ? prev : current);
  }
}