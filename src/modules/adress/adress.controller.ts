import {
  Controller,
  Body,
  Post,
  Put,
  Get,
  Res,
  Req,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AdressService } from './adress.service';
import { CreateAdressEntity } from './dtos/create-adress.dto';
import { UpdateAdressEntity } from './dtos/update-adress.dto';
import { DeleteAdressEntity } from './dtos/delete-adress.dto';
import { JwtAuthGuard } from '../../infrastructure/jwt/jwt-auth.guard';
import { FindOneAdressEntity } from './dtos/find-one-adress.dto';
@Controller('/v1/adress')
export class AdressController {
  constructor(private readonly adressService: AdressService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createAdress(
    @Body() body: CreateAdressEntity,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const bearerToken = req.headers.authorization;
    const create = await this.adressService.createAdress(body, bearerToken);
    return res.json(create);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/list')
  async getAdress(@Req() req: Request, @Res() res: Response) {
    const bearerToken = req.headers.authorization;
    const listAdress = await this.adressService.getAdress(bearerToken);
    return res.json(listAdress || []);
  }

  @Get('/list-one')
  async findOne(
    @Body() body: FindOneAdressEntity,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const listAdress = await this.adressService.findOne(body.adressId);
    return res.json(listAdress || []);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/edit')
  async editAdress(
    @Body() body: UpdateAdressEntity,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const bearerToken = req.headers.authorization;
    console.log(body, bearerToken);
    const editAdress = await this.adressService.editAdress(
      bearerToken,
      body.adressId,
      body,
    );
    return res.json(editAdress || []);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete')
  async deleteAdress(
    @Body() body: DeleteAdressEntity,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const bearerToken = req.headers.authorization;
    const deleteAdress = await this.adressService.deleteAdress(
      bearerToken,
      body.adressId,
    );
    return res.json(deleteAdress);
  }
}
