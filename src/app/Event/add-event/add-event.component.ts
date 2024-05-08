import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  //typeEvent: string[] = Object.values(TypeTerrain);

  
  AddEventForm= new FormGroup({
    nomEvent: new FormControl('', [Validators.required, Validators.minLength(6)]),
    categorie: new FormControl('', [Validators.required]),
    dateDebut: new FormControl('', [Validators.required, this.dateTimeFormatValidator]),
    dateFin: new FormControl('', [Validators.required, this.dateTimeFormatValidator]),
    nbParticipants: new FormControl('', [Validators.required, Validators.min(2), this.onlyNumbersValidator]),
    location: new FormControl('', [Validators.required])
    
  });

  constructor(private http: HttpClient, private trService: EventService, private router: Router) {

  }
  
  save() {
    this.trService.addEvent(this.AddEventForm.value as any).subscribe(response => {
      

      console.log('Event added successfully!', response);
      alert('Event ajouté avec succès!');
      this.router.navigate(['/Events']);
      this.AddEventForm.reset();
    }, error => {
      console.error('Error adding Event:', error);
    });
  
  }
  
  onlyNumbersValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^\d+$/.test(control.value);
    return valid ? null : { onlyNumbers: true };
  }

  dateTimeFormatValidator(control: AbstractControl): { [key: string]: any } | null {
    // format (YYYY-MM-DDTHH:MM)
    const validFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(control.value);
    return validFormat ? null : { dateTimeFormat: true };
  }

  radioButton: any;
}