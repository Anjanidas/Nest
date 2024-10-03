import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('name')
  // getBoth(): { hello: string; name: string } {
  //   const helloMessage = this.appService.getHello();
  //   const nameMessage = this.appService.getName();

  //   return {
  //     hello: helloMessage,
  //     name: nameMessage,
  //   };
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  addUser(): string {
    return this.appService.addUser();
  }

  // @Get('name')
  // getName(): string {
  //   return this.appService.getName();
  // }
}
