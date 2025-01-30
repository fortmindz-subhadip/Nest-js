import { Injectable } from '@nestjs/common';
import { CreateTardingDto } from './dto/create-tarding.dto';
import { UpdateTardingDto } from './dto/update-tarding.dto';

@Injectable()
export class TardingService {
  create(createTardingDto: CreateTardingDto) {
    return 'This action adds a new tarding';
  }

  findAll() {
    return `This action returns all tarding`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tarding`;
  }

  update(id: number, updateTardingDto: UpdateTardingDto) {
    return `This action updates a #${id} tarding`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarding`;
  }
}
