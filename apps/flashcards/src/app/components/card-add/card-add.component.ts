import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CreateCardDto, Deck } from '@flashcards/api-interfaces';
import { Store } from '@ngxs/store';
import { AddCard } from '../../actions/flashcards.actions';

@Component({
  selector: 'flashcards-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css'],
})
export class CardAddComponent implements OnInit {
  @Input() deck: Deck;

  frontText = '';
  backText = '';

  @ViewChild('frontInput') frontInput: ElementRef<HTMLInputElement>;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addCard(deck: Deck) {
    const cardDto: CreateCardDto = {
      frontString: this.frontText,
      backString: this.backText,
      deckId: deck.id,
    };
    this.store.dispatch(new AddCard(cardDto));
    this.frontText = '';
    this.backText = '';
    this.frontInput.nativeElement.focus();
  }
}
