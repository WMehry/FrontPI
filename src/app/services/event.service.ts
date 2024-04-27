import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../Models/Event/event';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8089/pi/Event'; 

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/get/all`).pipe(
      catchError(this.handleError)
    );
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/get/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addEvent(Event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}/addEventreservation`, Event).pipe(
      catchError(this.handleError)
    );
  }

  updateEvent(Event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/update`, Event).pipe(
      catchError(this.handleError)
    );
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}