import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser(): string {
    return 'User details shown';
  }

  getUserName(name: string) {
    return `how are you Mr ${name}`;
  }
}
