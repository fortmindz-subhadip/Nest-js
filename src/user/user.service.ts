import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { userInterface } from './user.interface';
import { Model } from 'mongoose';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  @InjectModel('User') private readonly userModel: Model<userInterface >

  async registerUser(userData:any){
    return await this.userModel.create(userData);

  }
  async loginUser(){

  }

  async findOne(email: string): Promise<User | undefined> {
    return await  this.userModel.findOne({ email });
  }
  async findById(id: string){
    return await this.userModel.findById(id);
  }

}