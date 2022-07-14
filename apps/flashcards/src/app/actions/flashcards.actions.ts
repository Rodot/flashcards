import { Card } from '../state/decks/decks.model';

export class AddCard {
  static readonly type = '[FLASHCARDS] Add';

  constructor(public payload: Card) {
    console.log('AddCard payload:', payload);
  }
}
