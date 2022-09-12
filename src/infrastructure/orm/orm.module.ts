import { Module } from '@nestjs/common';
import { ORMService } from './orm.service';
import { DBClientConfig } from '../postgre.client';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdressEntity } from './entities/adress.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRootAsync(DBClientConfig),
    TypeOrmModule.forFeature([AdressEntity]),
  ],
  providers: [ORMService],
  exports: [ORMService],
})
export class OrmModule {}
