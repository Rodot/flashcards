import { Selector, State } from '@ngxs/store';
import { DecksStateModel, Deck } from './decks.model';

@State<DecksStateModel>({
  name: 'decks',
  defaults: {
    deck: {
      cards: [
        { front: 'front text 1', back: 'back text 1' },
        { front: 'front text 2', back: 'back text 2' },
      ],
    },
  },
})
export class DecksState {
  @Selector()
  static getDeck(state: DecksStateModel): Deck {
    return state.deck;
  }
}
