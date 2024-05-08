import { Tournoi } from "src/app/Models/Tournoi/tournoi";
import { Terrain } from "../Terrain/terrain";

export class ReservationTerrain {
    numRes!: number;
  dateDebut!: Date;
  dateFin!: Date;
  //typeRes!: TypeReservation;
  //user!: User;
  terrain!: Terrain;
  tournoi!: Tournoi;
}

