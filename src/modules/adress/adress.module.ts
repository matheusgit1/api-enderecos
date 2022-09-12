import { Module } from '@nestjs/common';
import { AdressService } from './adress.service';
import { AdressController } from './adress.controller';
import { JwtModule } from '@nestjs/jwt';
import { ORMService } from '../../infrastructure/orm/orm.service';
import { OrmModule } from '../../infrastructure/orm/orm.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdressEntity } from '../../infrastructure/orm/entities/adress.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../../infrastructure/jwt/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([AdressEntity]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
    OrmModule,
  ],
  providers: [AdressService, ORMService, JwtStrategy],
  controllers: [AdressController],
  exports: [AdressService, ORMService],
})
export class AdressModule {}
