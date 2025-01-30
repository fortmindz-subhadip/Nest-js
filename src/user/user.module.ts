import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.model';

@Module({
    imports:[MongooseModule.forFeature([{
        name: 'User',schema:userSchema}])],
    providers: [UsersService],
  exports: [UsersService],
})
export class UserModule {}
