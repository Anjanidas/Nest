import { Injectable } from '@nestjs/common';
import { CatsService } from './modules/cats/cats.service';
import { UsersService } from './modules/users/users.service';

@Injectable()
export class AppService {
  constructor(
    private readonly catService: CatsService,
    private readonly userService: UsersService,
  ) {}
  getHello(): string {
    return 'HELLO WORLD!!';
  }

  getName(): string {
    return 'This is me!!';
  }

  addUser(): string {
    return 'New user added!';
  }
}
