import { Injectable } from '@angular/core';

const TOKEN_KEY =
'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3aXNzb2JlamFvdWlAZ21haWwuY29tIiwiaWF0IjoxNzE1MTc4MTM2LCJleHAiOjE3MTUyNjQ1MzZ9.gf8qDoBa6xdta8n_OyYj--dGRXvnBBD1fv4LMeVgg30';
@Injectable({
  providedIn: 'root'
})

export class TokenStorageServiceService {
  
  constructor() { }
  
  public saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
}
