import { CreateCardDto } from '@flashcards/api-interfaces';

export class AddCard {
  static readonly type = '[FLASHCARDS] Add card';
  constructor(public payload: CreateCardDto) {}
}

export class FetchDecks {
  static readonly type = '[FLASHCARDS] Fetch decks';
  constructor() {}
}
