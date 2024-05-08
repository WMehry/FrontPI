import { Event } from 'src/app/Models/Event/event';
import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { EventListComponent } from 'src/app//event-list/event-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Shareholder,TypeShareholder } from '../Models/Shareholder/shareholder'; 
import { ShareholderService } from '../services/shareholder.service';
type double =number;

@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.scss']
})
export class DetailsEventComponent implements OnInit {

  id!: number;
    event!: Event;
    interestRate: double | undefined;
    investmentAmount: double = 0;
    types: TypeShareholder[] = [TypeShareholder.SUPPLIER, TypeShareholder.ASSOCIATION, TypeShareholder.BANK];
    selectedType: TypeShareholder | undefined;
    idShareholder!: number;
    constructor(private route: ActivatedRoute,private router: Router,
                private eventService: EventService, private shareholderService: ShareholderService) { }

    ngOnInit() {console.log("idShareholder:", this.idShareholder);
       

        this.id = this.route.snapshot.params['id'];

        this.eventService.getEvent(this.id)
                .subscribe(data => {
                console.log(data)
                this.event = data;
      }, error => console.log(error));
    }

    list(){
        this.router.navigate(['Event']);
    }
    calculateInterestRate(): void {
      if (this.selectedType && this.investmentAmount > 0) {
        this.shareholderService.getInterestRateForShareholder(this.selectedType, this.investmentAmount)
          .subscribe(
            (rate: double)=> this.interestRate = rate,
            (error: any)=> console.log('Une erreur est survenue lors du calcul du taux d\'intérêt :', error)
          );
      }
    }
    BacktoAdminDashboard(){
      this.router.navigate(['AdminDashbord']);
    }
}
