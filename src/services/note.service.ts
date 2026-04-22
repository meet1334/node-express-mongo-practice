import { NoteRepository } from '../repositories/note.repository';

export class NoteService {
  private readonly noteServicerepository = new NoteRepository();

  createNote = async (data: any) => {
    return this.noteServicerepository.create(data);
  };

  getAllNotes = async () => {
    return this.noteServicerepository.getAll();
  };

  getNoteById = async (id: string) => {
    return this.noteServicerepository.findById(id);
  };

  updateNote = async (id: string, data: any) => {
    return this.noteServicerepository.updateById(id, data);
  };

  deleteNoteById = async (id: string) => {
    return this.noteServicerepository.deleteById(id);
  };

  deleteAllNote = async (condition: any) => {
    return this.noteServicerepository.deleteMany(condition);
  };
}
