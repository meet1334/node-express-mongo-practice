import { Document, model, Schema } from "mongoose";

export interface UserDocument extends Document {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  age?: number;
  createdAt?: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    age: Number,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

export const User = model<UserDocument>("User", userSchema);
