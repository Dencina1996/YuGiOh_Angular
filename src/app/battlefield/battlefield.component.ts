import { Component, OnInit } from '@angular/core';
import { TerrainDataService } from '../services/terrain-data.service';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent implements OnInit {

  terrains: any[] = [];

  constructor(private terrainDataService: TerrainDataService) {
    
  }

  ngOnInit(): void {
    this.getData();
  }

  public getData() {
    this.terrainDataService.getAllTerrains().subscribe((response: any) => {
      for (var i = 0; i < 49; i++) {
          var randomIndex = Math.floor(Math.random()*Object.keys(response).length);
          this.terrains.push(Object.values(response)[randomIndex]);
      }

      console.log(this.terrains);
    });

  }
}
