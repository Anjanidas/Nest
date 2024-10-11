import { Injectable } from '@nestjs/common';
import { createrCatDto } from './dto/createCat.dto';

@Injectable()
export class CatsService {
  private readonly cats: createrCatDto[] = [];
  get(): string {
    return 'this is cat page';
  }
  getCat(name: string): string {
    return `This is the ${name} cat`;
  }

  create(cats: createrCatDto) {
    this.cats.push(cats);
  }

  findAll(): createrCatDto[] {
    return this.cats;
  }
}
