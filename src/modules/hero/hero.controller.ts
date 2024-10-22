import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroById, Hero } from './hero';
import { HeroService } from './hero.service';

// interface HerosService {
//   FindOne(data: HeroById): Hero;
// }

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}
  @GrpcMethod('HeroesService', 'FindOne')
  FindOne(data: HeroById): Hero {
    return this.heroService.FindOne(data);
  }

  @Get()
  getHero(): string {
    return 'getHero function is called';
  }
}
