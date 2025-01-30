import { PartialType } from '@nestjs/mapped-types';
import { CreateTardingDto } from './create-tarding.dto';

export class UpdateTardingDto extends PartialType(CreateTardingDto) {
  id: number;
}
