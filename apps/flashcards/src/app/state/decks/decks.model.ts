export interface Card {
  front: string;
  back: string;
}

export interface Deck {
  cards: Array<Card>;
}

export interface DecksStateModel {
  deck: Deck;
}
