import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { carInterFace } from '../cars/interface/car.interface';
import { Car } from './schema/car.schema';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name) private readonly carModel: Model<Car>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    const car = await this.carModel.findOne({ name: createCarDto.name });
    if (car) {
      return car;
    }
    return await this.carModel.create(createCarDto);
  }

  findAll() {
    return this.carModel.find();
  }

  async findOne(id: string) {
    const car = await this.carModel.findOne({ _id: id });
    return car;
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    const car = await this.findOne(id);
    if (!car) {
      throw new Error(`Car with ID ${id} not found`);
    }
    const updateObj = Object.assign(car, updateCarDto);
    const updatedCarData = await this.carModel
      .findByIdAndUpdate(id, updateObj, { new: true })
      .exec();
    return {
      message: 'Car updated successfully',
      data: updatedCarData,
    };
  }

  async remove(id: string) {
    await this.carModel.findOneAndDelete({ _id: id }).exec();

    return new HttpException('Car deleted successfully', HttpStatus.OK);
  }
}
