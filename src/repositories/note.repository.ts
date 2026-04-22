import { Note } from "../models/note.model";

class NoteRepository {
  async create(data: any) {
    return Note.create(data);
  }

  async find() {
    return Note.find().populate("createdBy");
  }

  async findById(id: string) {
    return Note.findById(id);
  }

  async update(id: string, data: any) {
    return Note.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  async delete(id: string) {
    return Note.findByIdAndDelete(id);
  }
}

export default new NoteRepository();
