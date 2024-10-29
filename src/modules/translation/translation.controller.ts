import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TranslationService } from './translation.service';
import { createTranslationDto } from './dto/create-translation.dto';

@Controller('translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Post()
  async create(
    @Body() createTranslationDto: createTranslationDto,
  ): Promise<createTranslationDto> {
    return this.translationService.create(createTranslationDto);
  }

  @Get()
  async findAll(): Promise<createTranslationDto[]> {
    return this.translationService.findAll();
  }

  @Put(':locale')
  async update(
    @Param('locale') locale: string,
    @Body() translationDto: createTranslationDto,
  ): Promise<createTranslationDto> {
    return this.translationService.update(locale, translationDto);
  }

  @Delete()
  async deleteAll(): Promise<void> {
    return this.translationService.deleteAll();
  }
}
