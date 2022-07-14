import { Card } from '@flashcards/api-interfaces';

export class AddCard {
  static readonly type = '[FLASHCARDS] Add';

  constructor(public payload: Card) {
    console.log('AddCard payload:', payload);
  }
}
