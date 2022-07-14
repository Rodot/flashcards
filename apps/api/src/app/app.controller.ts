import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';

import { Message } from '@flashcards/api-interfaces';

import { AppService } from './app.service';
import { DeckEntity } from '../entity/Deck.entity';
import { AppDataSource } from '../data-source';
import { CardEntity } from '../entity/Card.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Post('deck')
  async createDeck(@Body() deck: DeckEntity): Promise<number> {
    const deckRepository = AppDataSource.getRepository(DeckEntity);
    await deckRepository.save(deck);
    console.log(deck);
    return deck.id;
  }

  @Post('card')
  async createCard(@Body() card: CardEntity): Promise<number> {
    const cardRepository = AppDataSource.getRepository(CardEntity);
    await cardRepository.save(card);
    console.log(card);
    return card.id;
  }

  @Get('decks')
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
}
