import { Card, Deck } from '@flashcards/api-interfaces';

export function addCardToDeck(card: Card, deck: Deck): Deck {
  const newDeck = { ...deck, cards: [...deck.cards, card] };
  return newDeck;
}
