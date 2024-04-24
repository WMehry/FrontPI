import { Component } from '@angular/core';
import { TerrainService } from '../services/terrain.service';
import { Terrain } from '../models/terrain';
@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css'],
  providers:[TerrainService]
})
export class TerrainComponent {
  title='terrain-app';
  terrains!: Terrain []
constructor(private terrainService:TerrainService){
}
ngOnInit(){
  console.log("on init ......")
  
  this.terrainService.getTerrains().subscribe(
    data=>this.terrains=data)
}

  deleteTerrain(id: number) {
    this.terrainService.removeTerrain(id).subscribe(() => {
      console.log('Terrain supprimé avec succès');
      this.refreshTerrain();
    }, error => {
      if (error.status === 500) {
        console.error('Erreur lors de la suppression du terrain :', error);
        alert('Impossible de supprimer ce Terrain car il est associé à des réservations.');
      } else {
        console.error('Erreur lors de la suppression du terr :', error);
      }
    });
  }
listTerrains!: Terrain [];
refreshTerrain() {
  this.terrainService.getTerrains().subscribe(
    (terrain) => {
      this.terrains = terrain; // Update this.terrains directly
      console.log('Liste des terrains rafraîchie avec succès', this.terrains);
    },
    error => {
      console.error('Erreur lors de la récupération des terrains :', error);
    }
  );
}

}


