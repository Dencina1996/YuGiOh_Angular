import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardDataService } from '../../services/card-data.service';
import { Card } from "../card/card.component";

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

    // OBJECT
    hand: any[] = [];
    currentCard: any;

    // MAIN STRUCTURE
    id: number = 0;
    name: string = "";
    element: string = "";
    artwork: string = "";
    pack: string = "";
    description: string = "";
    code: number = 0;

    // IF CARD IS A CREATURE
    isCreature: boolean = false;
    hasEffect: boolean = false;
    level: number = 0;
    type: string = "";
    attack: number = 0;
    defense: number = 0;

    // IF CARD IS A MAGIC
    isMagic: boolean = false;
    magicType: string = "";

    // IF CARD IS A TRAP
    isTrap: boolean = false;
    trapType: string = "";

    constructor(private cardDataService: CardDataService) {
    
    }

    ngOnInit(): void {
        this.getData();
    }

    public getData() {
        this.cardDataService.getAllCards().subscribe((response: any) => {
            for (var i = 0; i < 5; i++) {
                var randomIndex = Math.floor(Math.random()*Object.keys(response).length);
                this.hand.push(Object.values(response)[randomIndex]);
            }

            console.log(this.hand);

            /*
            this.hand = response;

            let list: string[] = [];

            


            console.log(list);

            */
        });

        
    }

    public showCard(id: number) {
        this.cardDataService.getCardById(id).subscribe((response: any) => {
            this.currentCard = response;
            console.log(this.currentCard);
            
            let pepito = document.getElementById("jesus");
            if (pepito === null) {
              // you should handle the case in an appropriate way here
              return;
            } else {
                pepito.style.display = "block";
            }

        });
    }

    public hideCard() {
        let pepito = document.getElementById("jesus");
        if (pepito === null) {
          
        } else {
            pepito.style.display = "none";
        }
         
    }

}