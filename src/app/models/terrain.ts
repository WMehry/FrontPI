export class Terrain {
        numTerrain?: number;
        nomTerrain?: string;
        imageTerrain?: string;
        statusTerrain?: StatusTerrain;
        typeTerrain?: TypeTerrain;

    }

    export enum StatusTerrain {
        Reserve = 'Reserve',
        Libre = 'Libre'
      }
      
      export enum TypeTerrain {
        Football = 'Football',
        Basketball = 'Basketball',
        Handball = 'Handball'
      }
      