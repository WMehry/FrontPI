import { ReservationTerrain } from "./reservation-terrain";

export class Terrain {
numTerrain!: number;
  nomTerrain!: string;
  typeTerrain!: TypeTerrain;
  reservations!: ReservationTerrain[];
}

export enum TypeTerrain {
    Football = 'Football',
    Basketball = 'Basketball',
    Handball = 'Handball'
  }
  