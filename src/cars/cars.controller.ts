import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post('create')
 async  create(@Body() createCarDto: CreateCarDto) {
    const car = await this.carsService.create(createCarDto);
    return new HttpException(car,HttpStatus.CREATED);
  }

  @Get()
 async  findAll() {
    const carDetailsList=await this.carsService.findAll();
    return new HttpException(carDetailsList,HttpStatus.OK);
  }

  @Get(':id')
async  findOne(@Param('id') id: string) {
    const car=await  this.carsService.findOne(id);
    if(!car){
      throw new HttpException('Cars Details not found',HttpStatus.NOT_FOUND);
    }
    return new HttpException(car,HttpStatus.OK);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(id);
  }
}
