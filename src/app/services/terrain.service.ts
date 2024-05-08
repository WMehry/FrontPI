import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Terrain } from '../Models/Terrain/terrain';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  readonly API_URL = "http://localhost:8089/pi";
  readonly ENDPOINT_TERRAINS = "/terrain";

  constructor(private httpClient: HttpClient) { }

  // Method to retrieve all terrains
  getTerrains(): Observable<Terrain[]> {
    return this.httpClient.get<Terrain[]>(this.API_URL + this.ENDPOINT_TERRAINS + "/get/all");
  }

  // Method to add a terrain
  addTerrain(terrain: Terrain): Observable<Terrain> {
    const formData: FormData = new FormData();

    return this.httpClient.post<Terrain>(this.API_URL + this.ENDPOINT_TERRAINS + "/add", terrain);
  }

  // Method to update a terrain
  updateTerrain(terrain: Terrain): Observable<Terrain> {
    return this.httpClient.put<Terrain>(this.API_URL + this.ENDPOINT_TERRAINS + "/update", terrain);
  }

  // Method to get terrain by ID
  getTerrainById(idTerrain: number): Observable<Terrain> {
    return this.httpClient.get<Terrain>(this.API_URL + this.ENDPOINT_TERRAINS + `/get/${idTerrain}`);
  }

  // Method to delete a terrain
  removeTerrain(idTerrain: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + this.ENDPOINT_TERRAINS + `/delete/${idTerrain}`);
  }

  // Method to get terrains by status
  getTerrainsByStatus(statusTerrain: string): Observable<Terrain[]> {
    return this.httpClient.get<Terrain[]>(this.API_URL + this.ENDPOINT_TERRAINS + `/get/status=/${statusTerrain}`);
  }

  // Method to check availability of terrains within a date range
  checkAvailability(datedebut: string, datefin: string): Observable<Terrain[]> {
    return this.httpClient.get<Terrain[]>(this.API_URL + this.ENDPOINT_TERRAINS + `/checkAvailability/datedebut=${datedebut}/datefin=${datefin}`);
  }
}
