import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongodb';

export type UserDocument = User & Document;

@Schema()
export class Name {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;
}
@Schema()
export class User {
  @Prop({ type: Name, required: true })
  name: Name;

  @Prop({ required: true })
  age: number;

  @Prop({ required: false })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ 'name.lastName': 1 });
