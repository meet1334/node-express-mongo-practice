import { Document, model, Schema, Types } from 'mongoose';

export interface NoteDocument extends Document {
  id?: typeof Schema.Types.ObjectId;
  title: string;
  content: string;
  attechments?: string;
  createdBy: Types.ObjectId;
  createdAt?: Date;
}

const noteSchema = new Schema<NoteDocument>(
  {
    id: {
      type: Schema.Types.ObjectId,
      trim: true,
      generated: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    attechments: {       // Or "attachments" correctly spelled 
      type: String,
      trim: true,
      required: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Date,
      trim: true,
      default: Date.now,
    },
  },
  { timestamps: true },
);

export const Note = model<NoteDocument>('Note', noteSchema);
