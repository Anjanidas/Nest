import { Injectable, NotFoundException } from '@nestjs/common';
import { createTranslationDto } from './dto/create-translation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TranslationService {
  constructor(
    @InjectModel('Translation')
    private translationModel = Model<any>,
  ) {}
  async create(
    createTranslationDto: createTranslationDto,
  ): Promise<createTranslationDto> {
    const data = await new this.translationModel(createTranslationDto);
    return data.save();
  }

  async findAll(): Promise<createTranslationDto[]> {
    return this.translationModel.find();
  }

  async update(
    name: string,
    translationDto: createTranslationDto,
  ): Promise<createTranslationDto> {
    const data = await this.translationModel
      .findOneAndUpdate(
        { locale: name },
        { $set: translationDto },
        { new: true },
      )
      .exec();
    if (!data) {
      throw new NotFoundException(`data with locale name ${name} not found`);
    } else {
      return data;
    }
  }

  async deleteAll(): Promise<void> {
    await this.translationModel.deleteMany();
  }
}
