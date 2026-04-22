import { Note } from '../models/note.model';

export class NoteRepository {
  create = async (data: any) => {
    return Note.create(data);
  };

  getAll = async () => {
    return Note.find()
      .populate({ path: 'createdBy', select: '-password -__v' })
      .select('-__v -updatedAt')
      .sort({ createdAt: -1 });
  };

  find = async (condition: any) => {
    return Note.find(condition);
  };

  findOne = async (condition: any) => {
    return Note.findOne(condition);
  };

  findById = async (id: string) => {
    return Note.findById(id).populate({ path: 'createdBy', select: '-password -__v' }).select('-__v -updatedAt');
  };

  updateById = async (id: string, data: any) => {
    return Note.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
      projection: { updatedAt: 0, __v: 0 },
    });
  };

  deleteOne = async (condition: any) => {
    return Note.deleteOne(condition);
  };

  deleteMany = async (condition: any) => {
    return Note.deleteMany(condition);
  };

  deleteById = async (id: string) => {
    return Note.findByIdAndDelete(id);
  };
}
