import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],

})

export class Card {

    // CHILD
    @Input() childItem: any;

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

    // OBJECT
    //public item: any;
    

    
}