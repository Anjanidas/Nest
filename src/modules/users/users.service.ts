import { Injectable, NotFoundException } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './users.interface';
// import { User } from 'src/schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}
  // private readonly users: createUserDto[] = [];

  // getUser(): string {
  //   return 'User details shown';
  // }

  // create(user: createUserDto) {
  //   this.users.push(user);
  // }

  // findAll(): createUserDto[] {
  //   return this.users;
  // }
  // getUserName(name: string) {
  //   return `how are you Mr ${name}`;
  // }
  async create(createUserDto: createUserDto): Promise<IUser> {
    const createdUser = await new this.userModel(createUserDto);
    console.log('data', createdUser);
    return createdUser.save();
  }

  async findAll(): Promise<IUser[]> {
    return this.userModel.find();
  }

  async update(id: string, userDto: createUserDto): Promise<IUser> {
    const user = await this.userModel
      .findOneAndUpdate({ name: id }, { $set: userDto }, { new: true })
      .exec();
    if (!user) {
      throw new NotFoundException(`user with ${id} not found`);
    }
    return user;
  }

  async delete(id: string, userDto: createUserDto): Promise<IUser> {
    const user = await this.userModel.findByIdAndDelete(id, userDto);
    if (!user) {
      throw new NotFoundException(`user not found with id ${id}`);
    }
    return user;
  }
}
