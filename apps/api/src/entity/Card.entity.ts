import { Card } from '@flashcards/api-interfaces';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { DeckEntity } from './Deck.entity';

@Entity()
export class CardEntity implements Card{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  frontString: string;

  @Column()
  backString: string;

  @ManyToOne(() => DeckEntity, (deck) => deck.cards)
  deck: DeckEntity;
}
