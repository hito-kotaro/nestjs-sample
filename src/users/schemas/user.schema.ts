import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

// export type UserDocument = User & Document;

// export class User {
//   @Prop({ required: true, unique: true })
//   name: string;
//   // require: true;
//   // unique: true;

//   @Prop({ required: true })
//   password: string;
// }

// export const UserSchema = SchemaFactory.createForClass(User);

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
