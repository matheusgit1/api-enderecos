import { IsUUID } from 'class-validator';

export class FindOneAdressEntity {
  @IsUUID()
  adressId: string;
}
