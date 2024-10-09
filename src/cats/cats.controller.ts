import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Roles } from 'src/decorators/roles.decorator';
import { createrCatDto } from './dto/createCat.dto';
import { RolesGuard } from 'src/guard/roles.guard';

@Controller('cats')

export class CatsController {
  // catsService: any;
  constructor(private catService: CatsService) {}

  @Get()
  // async findAll() {
  //   throw new HttpException('forbidden', HttpStatus.FORBIDDEN);
  // }
  async callCat(): Promise<createrCatDto[]> {
    // return this.catService.get();
    return this.catService.findAll();
  }
  @Get(':id')
  findCat(@Param('id') id: string): string {
    return this.catService.getCat(id);
  }

  @Post()
  @UseGuards(RolesGuard)
  // @Roles(['admin'])
  async create(@Body() createrCatDto: createrCatDto) {
    return this.catService.create(createrCatDto);
  }
}
