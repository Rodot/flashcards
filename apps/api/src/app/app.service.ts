import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateCardDto,
  CreateDeckDto,
  Message,
} from '@flashcards/api-interfaces';
import { DeckEntity } from '../entity/Deck.entity';
import { AppDataSource } from '../data-source';
import { CardEntity } from '../entity/Card.entity';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  async getDecks(): Promise<DeckEntity[]> {
    const deckRepository = AppDataSource.getRepository(DeckEntity);
    const decks = await deckRepository.find({
      relations: {
        cards: true,
      },
    });
    if (!decks) throw NotFoundException;
    return decks;
  }

  async createDeck(deckDto: CreateDeckDto): Promise<number> {
    // create entity from dto
    const deck = new DeckEntity();
    deck.name = deckDto.name;
    // save entity
    const deckRepository = AppDataSource.getRepository(DeckEntity);
    await deckRepository.save(deck);
    return deck.id;
  }

  async crateCard(cardDto: CreateCardDto): Promise<number> {
    // find card's deck
    const deckRepository = AppDataSource.getRepository(DeckEntity);
    const deck = await deckRepository.findOneBy({ id: cardDto.deckId });
    if (!deck) throw NotFoundException;
    // create entity from dto
    const card = new CardEntity();
    card.frontString = cardDto.frontString;
    card.backString = cardDto.backString;
    card.deck = deck;
    // save entity
    const cardRepository = AppDataSource.getRepository(CardEntity);
    await cardRepository.save(card);
    return card.id;
  }
}
