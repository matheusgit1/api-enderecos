import { AdressEntity } from './entities/adress.entity';

export interface ORMRepository {
  findOne: (adressId: string) => Promise<AdressEntity>;
  getAdress: (userId: string) => Promise<AdressEntity[]>;
  createOne: (body: any) => Promise<AdressEntity[]>;
  editAdress: (
    userId: string,
    adressId: string,
    body,
  ) => Promise<AdressEntity[]>;
  deleteOne: (adressId: string) => Promise<void>;
}
