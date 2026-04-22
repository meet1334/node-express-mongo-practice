import { NoteRepository } from '../repositories/note.repository';

export class NoteService {
  private readonly noteServicerepository = new NoteRepository();

  async create(data: any) {
    return this.noteServicerepository.create(data);
  }

  async findAll() {
    return this.noteServicerepository.find();
  }

  async findById(id: string) {
    return this.noteServicerepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.noteServicerepository.update(id, data);
  }

  async delete(id: string) {
    return this.noteServicerepository.delete(id);
  }
}
