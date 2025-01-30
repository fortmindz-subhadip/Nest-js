import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TardingModule } from './tarding/tarding.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),MongooseModule.forRoot(process.env.MONGO_URI), CarsModule, AuthModule, UserModule, TardingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
