import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deck, Message } from '@flashcards/api-interfaces';
import { Select, Store } from '@ngxs/store';
import { DecksState } from './state/decks/decks.state';
import { Observable } from 'rxjs';
import { FetchDecks } from './actions/flashcards.actions';

@Component({
  selector: 'flashcards-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');

  @Select(DecksState.getDecks)
  decks$: Observable<Deck[]>;

  constructor(private http: HttpClient, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new FetchDecks());
  }
}
