import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CardEntity } from './Card.entity';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class DeckEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @OneToMany(() => CardEntity, (card) => card.deck)
  cards: CardEntity[];
}
