import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from 'src/app/models/card';
import { CardSubmitResponse } from 'src/app/models/card-submit-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  public getCards(): Observable<Card[]> {
    return this.http.get<Card[]>('assets/cards.mock.json');
  }

  public submitCard(card: Card): Observable<CardSubmitResponse> {
    console.log('card submitted:', card);
    // Send card data here as post
    // this.http.post<CardSubmitResponse>(url, card);
    return of({success: true});
  }
}
