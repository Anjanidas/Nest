import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

export class createTranslationDto extends Document {
  @IsArray()
  @ArrayNotEmpty()
  tags: string[];

  @IsString()
  @IsNotEmpty()
  locale: string;

  @IsString()
  key: string;

  @IsString()
  value: string;
}
