import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Worlds!';
  }

  getName(): string {
    return 'This is me!!';
  }

  addUser(): string {
    return 'New user added!';
  }
}
