import { Deck } from '@flashcards/api-interfaces';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CardEntity } from './Card.entity';

@Entity()
export class DeckEntity implements Deck{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => CardEntity, (card) => card.deck)
  cards: CardEntity[];
}
