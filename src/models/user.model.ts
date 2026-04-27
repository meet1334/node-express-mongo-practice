import mongoose, { Document, model, Schema } from 'mongoose';

export interface UserDocument extends Document {
  id?: typeof Schema.Types.ObjectId;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  phone?: string;
  avatar?: string;
  age?: number;
  createdAt?: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    id: {
      type: mongoose.Types.ObjectId,
      trim: true,
      generated: true,
    },
    first_name: {
      type: String,
      trim: true,
      required: true,
    },
    last_name: {
      type: String,
      trim: true,
      required: true,
    },
    username: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 8,
      required: false,
    },
    phone: {
      type: String,
      trim: true,
      maxlength:10,
      default: null,
    },
    avatar: {
      type: String,
      trim: true,
      default: null,
    },
    age: {
      type: Number,
      trim: true,
      minlength: 1,
      required: false,
    },
    createdAt: {
      type: Date,
      trim: true,
      default: Date.now,
    },
  },
  { timestamps: true },
);

userSchema.virtual('Note', {
  ref: 'Note',
  localField: '_id',
  foreignField: 'createdBy',
  count: false,
});

export const User = model<UserDocument>('User', userSchema);
