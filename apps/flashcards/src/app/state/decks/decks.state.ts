import { Injectable } from '@angular/core';
import { Deck } from '@flashcards/api-interfaces';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddCard, AddDeck, FetchDecks } from '../../actions/flashcards.actions';
import { DeckService } from '../../services/deck.service';
import { DecksStateModel } from './decks.model';

@State<DecksStateModel>({
  name: 'decks',
  defaults: {
    decks: [],
  },
})
@Injectable()
export class DecksState {
  constructor(private deckService: DeckService) {}

  @Selector()
  static getDecks(state: DecksStateModel): Deck[] {
    return state.decks;
  }

  @Action(AddDeck)
  addDeck(
    { dispatch }: StateContext<DecksStateModel>,
    { payload: deckDto }: AddDeck
  ) {
    this.deckService.addDeck(deckDto).subscribe({
      next: () => {
        dispatch(new FetchDecks());
      },
    });
  }

  @Action(AddCard)
  addCard(
    { dispatch }: StateContext<DecksStateModel>,
    { payload: cardDto }: AddCard
  ) {
    this.deckService.addCard(cardDto).subscribe({
      next: () => {
        dispatch(new FetchDecks());
      },
    });
  }

  @Action(FetchDecks)
  fetchDecks({ patchState }: StateContext<DecksStateModel>) {
    this.deckService.fetch().subscribe((decks: Deck[]) => {
      if (!decks) throw Error;
      patchState({
        decks,
      });
    });
  }
}
