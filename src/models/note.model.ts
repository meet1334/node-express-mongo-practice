import { Document, model, Schema,Types } from "mongoose";

export interface NoteDocument extends Document {
  title: string;
  content: string;
  createdBy: Types.ObjectId;
  createdAt?: Date;
}

const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true },
);

export const Note = model<NoteDocument>('Note', noteSchema);