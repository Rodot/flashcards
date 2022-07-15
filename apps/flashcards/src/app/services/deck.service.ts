import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateCardDto, CreateDeckDto, Deck } from '@flashcards/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor(private http: HttpClient) {}

  fetch(): Observable<Deck[]> {
    return this.http.get<Deck[]>('/api/decks');
  }

  addCard(body: CreateCardDto): Observable<number> {
    return this.http.post<number>('/api/card', body);
  }

  addDeck(body: CreateDeckDto): Observable<number> {
    return this.http.post<number>('/api/decks', body);
  }
}
