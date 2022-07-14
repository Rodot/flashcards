import { Deck } from '@flashcards/api-interfaces';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddCard } from '../../actions/flashcards.actions';
import { addCardToDeck } from '../../services/deck.service';
import { DecksStateModel } from './decks.model';

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

  @Action(AddCard)
  addCard(
    { getState, patchState }: StateContext<DecksStateModel>,
    { payload: newCard }: AddCard
  ) {
    const deck = getState().deck;
    const newDeck = addCardToDeck(newCard, deck);
    patchState({ deck: newDeck });
  }
}
