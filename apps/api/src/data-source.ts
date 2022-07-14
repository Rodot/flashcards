import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Card } from './entity/Card';
import { Deck } from './entity/Deck';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'rodot',
  password: '',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [Card, Deck],
  migrations: [],
  subscribers: [],
});
