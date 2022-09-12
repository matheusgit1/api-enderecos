import { IsUUID } from 'class-validator';

export class DeleteAdressEntity {
  @IsUUID()
  adressId: string;
}
