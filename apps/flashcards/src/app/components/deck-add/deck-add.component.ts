import { Component, OnInit } from '@angular/core';
import { CreateDeckDto } from '@flashcards/api-interfaces';
import { Store } from '@ngxs/store';
import { AddDeck } from '../../actions/flashcards.actions';

@Component({
  selector: 'flashcards-deck-add',
  templateUrl: './deck-add.component.html',
  styleUrls: ['./deck-add.component.css'],
})
export class DeckAddComponent implements OnInit {
  name = '';

  addDeck() {
    const deckDto: CreateDeckDto = {
      name: this.name,
    };
    this.store.dispatch(new AddDeck(deckDto));
    this.name = '';
  }

  constructor(private store: Store) {}
  ngOnInit(): void {}
}
