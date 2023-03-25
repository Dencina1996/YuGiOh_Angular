import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor(private httpclient: HttpClient) {
    
  }

  getAllCards() {
    return this.httpclient.get('http://localhost:8080/api/cards');
  }

  getCardById(id: number) {
    return this.httpclient.get('http://localhost:8080/api/cards/'+id);
  }
}
