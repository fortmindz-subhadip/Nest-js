import { Module } from '@nestjs/common';
import { TardingService } from './tarding.service';
import { TardingGateway } from './tarding.gateway';
import { ScheduleModule } from '@nestjs/schedule';
import { CarsModule } from 'src/cars/cars.module';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [TardingGateway, TardingService ,CarsModule],
})
export class TardingModule {}
