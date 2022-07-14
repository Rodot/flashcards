export interface Message {
  message: string;
}

export interface Card {
  front: string;
  back: string;
}

export interface Deck {
  cards: Array<Card>;
}
