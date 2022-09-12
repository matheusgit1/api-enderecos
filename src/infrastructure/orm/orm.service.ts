import { AdressEntity } from './entities/adress.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ORMRepository } from './orm.repository';

@Injectable()
export class ORMService implements ORMRepository {
  constructor(
    @InjectRepository(AdressEntity)
    private readonly ormService: Repository<AdressEntity>,
  ) {}

  public async findOne(adressId: string): Promise<AdressEntity> {
    const one = await this.ormService.findOne({ where: { id: adressId } });
    return one;
  }

  public async getAdress(userId: string): Promise<AdressEntity[]> {
    const response = await this.ormService.find({ where: { userId: userId } });
    return response;
  }

  public async createOne(body: any): Promise<AdressEntity[]> {
    const newOne = await this.ormService.create({ ...body });
    const savedOne = await this.ormService.save(newOne);
    return savedOne;
  }

  public async editAdress(
    userId: string,
    adressId: string,
    body,
  ): Promise<AdressEntity[]> {
    const updateOne = await this.ormService
      .createQueryBuilder()
      .update(AdressEntity)
      .set({ ...body })
      .where('id = :id', { id: adressId })
      .andWhere('userId = :userId', { userId: userId })
      .execute();
    //@ts-ignore
    return updateOne;
  }

  public async deleteOne(adressId: string): Promise<void> {
    await this.ormService
      .createQueryBuilder()
      .delete()
      .from(AdressEntity)
      .where('id = :id', { id: adressId })
      .execute();
    return;
  }
}
