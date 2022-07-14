import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Card } from './Card';

@Entity()
export class Deck {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Card, (card) => card.decks)
  @JoinTable()
  cards: Card[];
}
