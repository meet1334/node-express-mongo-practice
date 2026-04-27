import { NoteRepository } from '../repositories/note.repository';

import { getPaginationOptions, formatPaginatedResponse } from '../helpers/pagination.helper';

export class NoteService {
  private readonly noteServicerepository = new NoteRepository();

  createNote = async (data: any) => {
    return this.noteServicerepository.create(data);
  };

  getAllNotes = async (query: any = {}) => {
    const { page, limit, skip } = getPaginationOptions(query);
    const [notes, total] = await Promise.all([
      this.noteServicerepository.getAllNotesWithPagination({ skip, limit, search: query.search }),
      this.noteServicerepository.count(),
    ]);
    return formatPaginatedResponse(notes, total, page, limit);
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
