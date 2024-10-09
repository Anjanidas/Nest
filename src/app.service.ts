import { Injectable } from '@nestjs/common';
import { CatsService } from './cats/cats.service';
import { UsersService } from './users/users.service';

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
