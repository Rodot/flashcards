import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Card } from '../../state/decks/decks.model';
import { Store } from '@ngxs/store';
import { AddCard } from '../../actions/flashcards.actions';

@Component({
  selector: 'flashcards-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css'],
})
export class CardAddComponent implements OnInit {
  frontText = '';
  backText = '';

  @ViewChild('frontInput') frontInput: ElementRef<HTMLInputElement>;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addCard() {
    const card = { front: this.frontText, back: this.backText };
    console.log('Adding card', card);
    this.store.dispatch(new AddCard(card));
    this.frontText = '';
    this.backText = '';
    this.frontInput.nativeElement.focus();
  }
}
