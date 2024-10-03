import { Controller, Get, Header, HttpCode, Param, Post, Redirect } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
//   @HttpCode(205)
//   @Redirect('http://www.google.com')
  @Header('Cache-Control', 'public')
  getUserName(@Param('id') id: string): string {
    return this.userService.getUserName(id);
  }

  @Get('ab*cd')
  temp(): string {
    return 'using wildcard route currently';
  }
  @Post()
  addUser(): string {
    return 'user is added';
  }
}
