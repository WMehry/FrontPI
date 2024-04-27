import { Component } from '@angular/core';
import { Equipe } from '../Models/Equipe/equipe';
import { EquipeService } from '../services/equipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent {


title='updateequipe-app';
equipes: any = {};
constructor(private equipeService:EquipeService,private act:ActivatedRoute, private router: Router){
}
//typeEquipe: string[] = Object.values(TypeEquipe);
//statusEquipe: string[] = Object.values(StatusEquipe);

UpdateEquipeForm= new FormGroup({
numEquipe:new FormControl('', [Validators.required]),
nomEquipe: new FormControl('', [Validators.required]),
nbMemEquipe: new FormControl('', [Validators.required]),
classement: new FormControl('', [Validators.required])
});
numEquipe!:number
equipe!:Equipe;
ngOnInit() {
console.log("on init ......");
this.numEquipe = this.act.snapshot.params['numEquipe'];

this.UpdateEquipeForm.patchValue({
  numEquipe: this.numEquipe.toString() // Convert to string
});

// Fetch the details of the equipe based on numEquipe
this.equipeService.getEquipeById(this.numEquipe).subscribe(
  (equipe: Equipe) => {
    this.equipe = equipe;

    // Pre-fill other fields in the form with the fetched equipe details
    this.UpdateEquipeForm.patchValue({
      nomEquipe: equipe.nomEquipe,
      //classement: equipe.classement,
    //  nbMemEquipe: equipe.nbMemEquipe
    });
  },
  error => {
    console.error('Error fetching equipe details:', error);
  }
);
}
save() {
this.equipeService.updateEquipe(this.UpdateEquipeForm.value as any).subscribe(response => {
    // Handle response if needed
    console.log('Equipe modified successfully!', response);
    alert('Equipe modifié avec succès!');
    this.router.navigate(['/equipes']);

    // Optionally, you can reset the form after successful submission
    this.UpdateEquipeForm.reset();
  }, error => {
    // Handle error if needed
    console.error('Error adding equipe:', error);
  });
}
}