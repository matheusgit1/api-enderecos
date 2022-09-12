import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdressController } from '../adress/adress.controller';
import { AdressModule } from '../adress/adress.module';
import { AdressService } from '../adress/adress.service';
import { LoggingInterceptor } from '../../infrastructure/interceptors/logging.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [AdressModule],
  controllers: [AppController, AdressController],
  providers: [
    AppService,
    AdressService,
    JwtService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  exports: [JwtService],
})
export class AppModule {}
