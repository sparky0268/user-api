import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user, userDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(user.name) private userModel: Model<userDocument>) {}
  async create(createUserDto: CreateUserDto): Promise<user> {
    return new this.userModel(createUserDto).save();
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(name: string) {
    return this.userModel.findOne({ name: name });
  }

  async update(name: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ name }, { $set: { ...updateUserDto } });
  }

  remove(name: string) {
    return this.userModel.deleteOne({ name: name });
  }
}
