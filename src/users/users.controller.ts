import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
  UseGuards,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/createUser.dto';
import { AuthGaurd } from 'src/guard/auth.guard';
import { UserSchema } from 'src/schema/user.schema';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  // @Get()
  // async findAll(): Promise<createUserDto[]> {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // //   @HttpCode(205)
  // //   @Redirect('http://www.google.com')
  // @Header('Cache-Control', 'public')
  // getUserName(@Param('id') id: string): string {
  //   return this.userService.getUserName(id);
  // }

  // @Get('ab*cd')
  // temp(): string {
  //   return 'using wildcard route currently';
  // }
  // @Post()
  // // @UseGuards(AuthGaurd)
  // async create(
  //   @Body(new ValidationPipe({ whitelist: true })) createUserDto: createUserDto,
  // ) {
  //   this.userService.create(createUserDto);
  // }

  @Post()
  async createUser(@Body() createUserDto: createUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async getUsers() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: `this is a custom message`,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() userDto: createUserDto) {
    return this.userService.update(id, userDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string, @Body() userDto: createUserDto) {
    return this.userService.delete(id, userDto);
  }
}
