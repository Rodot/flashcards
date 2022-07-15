import { CreateCardDto, CreateDeckDto } from '@flashcards/api-interfaces';

export class AddDeck {
  static readonly type = '[FLASHCARDS] Add deck';
  constructor(public payload: CreateDeckDto) {}
}

export class AddCard {
  static readonly type = '[FLASHCARDS] Add card';
  constructor(public payload: CreateCardDto) {}
}

export class FetchDecks {
  static readonly type = '[FLASHCARDS] Fetch decks';
  constructor() {}
}
