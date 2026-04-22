import noteRepository from "../repositories/note.repository";

class NoteService {
  async create(data: any) {
    return noteRepository.create(data);
  }

  async findAll() {
    return noteRepository.find();
  }

  async findById(id: string) {
    return noteRepository.findById(id);
  }

  async update(id: string, data: any) {
    return noteRepository.update(id, data);
  }

  async delete(id: string) {
    return noteRepository.delete(id);
  }
}

export default new NoteService();
