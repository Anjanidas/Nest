import { Injectable, NotFoundException } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './users.interface';
import { UserDocument } from 'src/schema/user.schema';

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
  async create(createUserDto: any): Promise<any> {
    const createdUser = await new this.userModel(createUserDto);
    console.log('data', createdUser);
    return createdUser.save();
  }

  async findAll(): Promise<IUser[]> {
    // const result = await this.userModel
    //   .findOne({
    //     gameId: 'one',
    //     locale: 'us',
    //   })
    //   .explain('executionStats');
    // console.log(result);
    return this.userModel.find();
  }

  async getByAge(age: number): Promise<any> {
    const res = (await this.userModel
      .findOne({ age })
      .exec()) as unknown as UserDocument;
    if (!res) {
      throw new NotFoundException(`user with ${age} not found`);
    }
    return {
      'name.firstName': res.name.firstName,
      'name.lastName': res.name.lastName,
      age: res.age,
      email: res.email,
    };
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

  async delete(age: number) {
    const user = await this.userModel.findOneAndDelete({ age });
    if (!user) {
      throw new NotFoundException(`user not found with id ${age}`);
    }
    // return user;
  }

  async deleteAll(): Promise<void> {
    try {
      await this.userModel.deleteMany();
      console.log('delete method called');
      // return result;
    } catch (error) {
      console.log('could not delete all entries', error);
    }
  }
}
