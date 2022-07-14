import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CardEntity } from './entity/Card.entity';
import { DeckEntity } from './entity/Deck.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [CardEntity, DeckEntity],
  migrations: [],
  subscribers: [],
});
