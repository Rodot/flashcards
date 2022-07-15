import { IsNotEmpty } from 'class-validator';

export class CreateCardDto {
  @IsNotEmpty()
  frontString: string;

  @IsNotEmpty()
  backString: string;

  @IsNotEmpty()
  deckId: number;
}

export class CreateDeckDto {
  @IsNotEmpty()
  name: string;
}
