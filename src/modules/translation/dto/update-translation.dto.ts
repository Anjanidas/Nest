import { PartialType } from '@nestjs/mapped-types';
import { createTranslationDto } from './create-translation.dto';

export class UpdateTranslationDto extends PartialType(createTranslationDto) {}
