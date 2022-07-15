import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '@flashcards/api-interfaces';

@Component({
  selector: 'flashcards-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
})
export class CardsListComponent implements OnInit {
  @Input() deck: Deck;

  constructor() {}

  ngOnInit(): void {}
}
