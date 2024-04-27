import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EquipeService } from '../services/equipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent {


  title='updateequipe-app';
  equipes: any = {};
  constructor(private equipeService:EquipeService,private act:ActivatedRoute, private router: Router){
  }
  //typeEquipe: string[] = Object.values(TypeEquipe);
  //statusEquipe: string[] = Object.values(StatusEquipe);
  
  AddEquipeForm= new FormGroup({
  numEquipe:new FormControl('', [Validators.required]),
  nomEquipe: new FormControl('', [Validators.required]),
  nbMemEquipe: new FormControl('', [Validators.required]),
  classement: new FormControl('', [Validators.required])
  });
  save(){
    this.equipeService.addEquipe(this.AddEquipeForm.value as any).subscribe(response => {

      console.log('Terrain added successfully!', response);
      alert('Terrain ajouté avec succès!');
      this.router.navigate(['/terrains']);

      // Optionally, you can reset the form after successful submission
      this.AddEquipeForm.reset();
    }, error => {
      // Handle error if needed
      console.error('Error adding terrain:', error);
    });
  }
  
}


