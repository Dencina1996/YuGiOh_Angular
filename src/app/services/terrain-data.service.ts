import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TerrainDataService {

  constructor(private httpclient: HttpClient) {
    
  }

  getAllTerrains() {
    return this.httpclient.get('http://localhost:8080/api/terrains');
  }
}