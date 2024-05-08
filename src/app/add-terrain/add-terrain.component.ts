import { Component } from '@angular/core';
import { TerrainService } from '../services/terrain.service';
import { StatusTerrain, Terrain, TypeTerrain } from '../Models/Terrain/terrain';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-terrain',
  templateUrl: './add-terrain.component.html',
  styleUrls: ['./add-terrain.component.css'],
  providers:[TerrainService]

})
export class AddTerrainComponent {
  title='addterrain-app';
  terrains: any = {};
constructor(private terrainService:TerrainService, private router: Router){
}
typeTerrain: string[] = Object.values(TypeTerrain);
statusTerrain: string[] = Object.values(StatusTerrain);

AddTerrainForm= new FormGroup({
  nomTerrain: new FormControl('', [Validators.required]),
  statusTerrain: new FormControl('', [Validators.required]),
  typeTerrain: new FormControl('', [Validators.required])
});



ngOnInit(){
  console.log("on init ......")

  
}
save() {


  this.terrainService.addTerrain(this.AddTerrainForm.value as any).subscribe(response => {
      // Handle response if needed
      console.log('Terrain added successfully!', response);
      alert('Terrain ajouté avec succès!');
      this.router.navigate(['/terrains']);

      // Optionally, you can reset the form after successful submission
      this.AddTerrainForm.reset();
    }, error => {
      // Handle error if needed
      console.error('Error adding terrain:', error);
    });
  }
  
}


