//import { User } from './user'; // Import the User model if it exists
import { Terrain } from './terrain'; // Import the Terrain model if it exists
//import { Tournoi } from './tournoi'; // Import the Tournoi model if it exists

export class ReservationTerrain {
  numRes?: number;
  etatReser: boolean = true;
  dateDebut?: Date | string;
  dateFin?: Date | string;
  typeRes?: TypeReservation;
  //user?: User;
  terrain?: Terrain;
 // tournoi?: Tournoi;
}


export enum TypeReservation {
    Personnel = 'Personnel',
    Tournoi = 'Tournoi'
  }
  