import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deck, Message } from '@flashcards/api-interfaces';
import { Select, Store } from '@ngxs/store';
import { DecksState } from './state/decks/decks.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'flashcards-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');

  @Select(DecksState.getDeck)
  deck$: Observable<Deck>;

  constructor(private http: HttpClient, private store: Store) {}
}
