import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type translationDocument = translationSchema & Document;
@Schema()
export class translationSchema extends Document {
  @Prop({ type: [String], required: true })
  tags: string[];

  @Prop({ required: true })
  locale: string;

  @Prop({ required: true })
  key: string;

  @Prop({ required: true })
  value: string;
}

export const TranslationSchema =
  SchemaFactory.createForClass(translationSchema);
