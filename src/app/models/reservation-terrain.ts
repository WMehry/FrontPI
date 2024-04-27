import { Tournoi } from "./Tournoi/tournoi";
import { Terrain } from "./terrain";

export class ReservationTerrain {
    numRes!: number;
  dateDebut!: Date;
  dateFin!: Date;
  //typeRes!: TypeReservation;
  //user!: User;
  terrain!: Terrain;
  tournoi!: Tournoi;
}

