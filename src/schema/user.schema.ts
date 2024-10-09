import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongodb';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: false })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
