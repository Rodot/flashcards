import { Component, OnInit } from '@angular/core';
import { Card } from '../../state/decks/decks.model';
import { Store } from '@ngxs/store';
import { AddCard } from '../../actions/flashcards.actions';

@Component({
  selector: 'flashcards-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css'],
})
export class CardAddComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  addCard(card: Card) {
    console.log('Adding card', card);
    this.store.dispatch(new AddCard(card));
  }
}
