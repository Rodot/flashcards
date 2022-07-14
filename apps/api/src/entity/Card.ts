import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Deck } from './Deck';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  frontString: string;

  @Column()
  backString: string;

  @ManyToMany(() => Deck, (deck) => deck.cards)
  decks: Deck[];
}
