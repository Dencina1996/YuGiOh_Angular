import { Component } from '@angular/core';
import { CardDataService } from './services/card-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'Yu-Gi-Oh! Trading Card Game';
  currentItem = [];

  ngOnInit(): void {
    this.getData();
  }

  constructor(private cardDataService: CardDataService) {
    
  }

  public getData() {
    this.cardDataService.getCardById(4).subscribe((response: any) => {
      
     
      
      this.currentItem = Object.values(response);
      console.log(Object.values(response).length);
      console.log("lalala");
      console.log(this.currentItem);
  
    });
  }



}
