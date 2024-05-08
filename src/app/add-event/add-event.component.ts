import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Event } from "./../Models/Event/event";
import { EventService } from "./../services/event.service";
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
//import { staticUser } from '../staticUser';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  submitted = false;
  event : Event =new Event() ;
 // currentUser = staticUser;

  constructor(private eventservise :EventService ,private router: Router){ }
  ngOnInit(): void {
   // console.log(this.currentUser);
    
  }

  newEmployee(): void {
    this.submitted = false;
    this.event = new Event();
  }

  save() {
    this.eventservise
    .addEvent(this.event).subscribe(data => {
      console.log(data)
      this.event = new Event();
      
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();  
    console.log()  
  }
  BacktoAdminDashboard(){
    this.router.navigate(['AdminDashbord']);
  }
 
}
