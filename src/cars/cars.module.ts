
import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from './schema/car.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'cars',schema: CarSchema}])],
  controllers: [CarsController],
  providers: [CarsService],
  exports:[CarsModule]
 })
export class CarsModule {}
