import { Component } from '@angular/core';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css'],
  providers:[EquipeService]

})
export class EquipeComponent {
  title='equipe-app';
  equipes: any = {};
constructor(private equipeService:EquipeService){
}
ngOnInit(){
  console.log("on init ......")
  this.equipeService.getAllEquipes().subscribe((datas)=>{
    this.equipes=datas;
  })
}
}
