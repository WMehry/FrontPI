import { Equipe } from "../equipe";
import { ReservationTerrain } from "../reservation-terrain";
import { Terrain, TypeTerrain } from "../terrain";

export class Tournoi {
  numTournoi?: number;
  nomTournoi!: string;
  dateDebut!: Date|string;
  dateFin!: Date|string;
  nbEquipes?: number;
  recompense!: string;
  typeTournoi!: TypeTerrain;
  equipes!: Equipe[];
  reservation!: ReservationTerrain;
  event!: Event;
  terrain!: Terrain;
}
