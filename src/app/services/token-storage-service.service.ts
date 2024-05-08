import { Injectable } from '@angular/core';

const TOKEN_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3aXNzb2JlamFvdWlAZ21haWwuY29tIiwiaWF0IjoxNzE0NjE5MjQ0LCJleHAiOjE3MTQ3MDU2NDR9.UqJC7tOGy-ZOBav8n1h7r_EizT55sg3FL3UIbRAhCaY';

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
