import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Get(':id')
  // getUserName(@Param('id') id: string): string {
  //   return this.userService.getUserName(id);
  // }

  @Post()
  addUser(): string {
    return this.appService.addUser();
  }

  // @Get('name')
  // getName(): string {
  //   return this.appService.getName();
  // }
}
