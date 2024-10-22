import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero, HeroById } from './hero';

@Injectable()
export class HeroService {
  FindOne(data: HeroById): Hero {
    console.log(`FindOne called from services`);
    const items = [
      { id: 1, name: 'abcd' },
      { id: 2, name: 'xyz' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
