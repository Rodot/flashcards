import { Body, Controller, Get, Post } from '@nestjs/common';

import {
  Message,
  CreateCardDto,
  CreateDeckDto,
} from '@flashcards/api-interfaces';

import { AppService } from './app.service';
import { DeckEntity } from '../entity/Deck.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Post('deck')
  async createDeck(@Body() deckDto: CreateDeckDto): Promise<number> {
    return this.appService.createDeck(deckDto);
  }

  @Post('card')
  async createCard(@Body() cardDto: CreateCardDto): Promise<number> {
    return this.appService.crateCard(cardDto);
  }

  @Get('decks')
  async getDecks(): Promise<DeckEntity[]> {
    return this.appService.getDecks();
  }
}
