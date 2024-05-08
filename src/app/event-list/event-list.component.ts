import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../Models/Event/event'; 
import { EventService } from '../services/event.service';
import { ShareholderService } from '../services/shareholder.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Shareholder,TypeShareholder } from '../Models/Shareholder/shareholder'; 
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
type double =number;

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events!: Observable<Event[]>;
  idShareholder!: number;
  selectedEvent: Event | undefined;
  userMessage: string = '';
  botResponse: string = '';
  errorMessage: string = '';
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 3; // Modifier de 4 à 3
 
  totalPages: number = 1;
  paginatedEvents!: Observable<Event[]>;
  filteredEvents: Event[] = [];
 
  
  
  constructor(private eventService: EventService, private router: Router, private shareholderService: ShareholderService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("idShareholder:", this.idShareholder);
    this.reloadData();
  }
  
  reloadData(): void {
    this.getEvents();
  }
 
  private getEvents(): void {
    this.paginatedEvents = this.eventService.getEventsList().pipe(
        map(events => {
            this.filteredEvents = events.slice();
            this.updatePagination();
            return events;
        })
    );
  }
 

  eventDetails(idEvent: number): void {
    this.router.navigate(['detailsEvent', idEvent]);
  }

  AddEvent(): void {
    this.router.navigate(['AddEvent']);
  }

  updatePagination(): void {
    const totalItems = this.filteredEvents.length;
    this.totalPages = Math.ceil(totalItems / this.itemsPerPage);
    this.setPaginatedEvents();
  }

  setPaginatedEvents(): void {
    const startIdx = (this.currentPage - 1) * this.itemsPerPage;
    const endIdx = startIdx + this.itemsPerPage;
    this.paginatedEvents = of(this.filteredEvents.slice(startIdx, endIdx));
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.setPaginatedEvents(); // Mettre à jour les événements paginés
    }
  }
  
  searchEvent(): void {
    if (!this.searchTerm.trim()) {
      this.getEvents();
      return;
    }
    this.eventService.searchEventByNameEvent(this.searchTerm).subscribe(
      filteredEvents => {
        this.filteredEvents = filteredEvents;
        this.updatePagination();
      },
      error => console.error(error)
    );
  }

  addAndInvest(): void {
    this.router.navigate(['assign-shareholder/:id']);
  }

  likeEvent(event: Event): void {
    this.eventService.likeEvent(event.nameEvent).subscribe(() => {
      this.reloadData();
    });
  }

  dislikeEvent(event: Event): void {
    this.eventService.dislikeEvent(event.nameEvent).subscribe(() => {
      this.reloadData();
    });
  }
}
