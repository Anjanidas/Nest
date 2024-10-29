import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameDocument = Game & Document;

@Schema()
export class gameControlSchema {
  @Prop({ required: true })
  totalBet: string;
  @Prop({ required: true })
  win: string;
  @Prop({ required: true })
  balance: string;
}

@Schema()
export class descriptionSchema {
  @Prop({ required: true })
  a: string;

  @Prop({ required: true })
  b: string;

  @Prop({ required: true })
  c: string;
}

@Schema()
export class toggleSchema {
  @Prop({ required: true })
  showSplash: string;

  @Prop({ required: true })
  showIntro: string;

  @Prop({ required: true })
  music: string;

  @Prop({ required: true })
  sound: string;

  @Prop({ type: descriptionSchema, required: true })
  description: descriptionSchema;
}

@Schema()
export class autoplaySchama {
  @Prop({ required: true })
  head: string;

  @Prop({ required: true })
  winLimit: string;

  @Prop({ required: true })
  loseLimit: string;

  @Prop({ required: true })
  advanced: string;
}

@Schema()
export class settingSchema {
  @Prop({ type: toggleSchema, required: true })
  toggle: toggleSchema;

  @Prop({ type: autoplaySchama, required: true })
  autoPlay: autoplaySchama;
}

@Schema()
export class Game {
  @Prop({ required: true })
  gameId: string;

  @Prop({ required: true })
  locale: string;

  @Prop({ type: gameControlSchema, required: true })
  gameControl: gameControlSchema;

  @Prop({ type: settingSchema, required: true })
  setting: settingSchema;
}

export const GameSchema = SchemaFactory.createForClass(Game);
GameSchema.index({ '$**': 1 });
