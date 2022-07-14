import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { DeckEntity } from './Deck.entity';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class CardEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  frontString: string;

  @Column()
  @IsNotEmpty()
  backString: string;

  @ManyToOne(() => DeckEntity, (deck) => deck.cards)
  @IsNotEmpty()
  deck: DeckEntity[];
}
