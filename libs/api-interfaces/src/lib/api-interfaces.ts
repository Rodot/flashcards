export interface Message {
  message: string;
}

export interface Card {
  id: number;
  frontString: string;
  backString: string;
}

export interface Deck {
  id: number;
  name: string;
  cards: Array<Card>;
}
