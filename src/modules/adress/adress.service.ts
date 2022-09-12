import { Injectable } from '@nestjs/common';
import { ORMService } from '../../infrastructure/orm/orm.service';
import { CreateAdressEntity } from './dtos/create-adress.dto';
import { JwtService } from '@nestjs/jwt';
import { AdressEntity } from '../../infrastructure/orm/entities/adress.entity';
import { UpdateAdressEntity } from './dtos/update-adress.dto';

@Injectable()
export class AdressService {
  constructor(
    private readonly ormService: ORMService,
    private jwtService: JwtService,
  ) {}

  async findOne(adressId: string): Promise<AdressEntity> {
    const one = await this.ormService.findOne(adressId);
    return one;
  }

  async createAdress(
    body: CreateAdressEntity,
    token: string,
  ): Promise<AdressEntity[]> {
    const user = await this.jwtService.verifyAsync(token.split(' ')[1], {
      secret: process.env.JWT_SECRET,
    });
    const newAdress = await this.ormService.createOne({
      ...body,
      userId: user.id,
    });
    return newAdress;
  }

  async getAdress(token: string): Promise<AdressEntity[]> {
    const user = await this.jwtService.verifyAsync(token.split(' ')[1], {
      secret: process.env.JWT_SECRET,
    });
    const listAdress = await this.ormService.getAdress(user.id);
    return listAdress;
  }

  async editAdress(
    token: string,
    adressId: string,
    body: UpdateAdressEntity,
  ): Promise<AdressEntity> {
    const user = await this.jwtService.verifyAsync(token.split(' ')[1], {
      secret: process.env.JWT_SECRET,
    });
    delete body.adressId;
    await this.ormService.editAdress(user.id, adressId, body);
    const findEdited = await this.findOne(adressId);
    return findEdited;
  }

  async deleteAdress(token: string, adressId: string) {
    const del = await this.ormService.deleteOne(adressId);
    return del;
  }
}
