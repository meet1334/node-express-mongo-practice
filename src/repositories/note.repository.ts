import { Note } from '../models/note.model';

export class NoteRepository {
  create = async (data: any) => {
    return Note.create(data);
  };

  getAll = async (options: { skip?: number; limit?: number } = {}) => {
    let query = Note.find()
      .populate({ path: 'createdBy', select: '-password -__v' })
      .select('-__v -updatedAt')
      .sort({ createdAt: -1 });

    if (options.skip !== undefined) query = query.skip(options.skip);
    if (options.limit !== undefined) query = query.limit(options.limit);

    return query;
  };

  getAllNotesWithPagination = async (option: { skip: number; limit: number; search: string }) => {
    const pipeline: any[] = [];

    if (option.search) {
      pipeline.push({
        $match: {
          $or: [{ title: { $regex: option.search, $options: 'i' } }, { content: { $regex: option.search, $options: 'i' } }],
        },
      });
    }
    if (option.skip) {
      pipeline.push({
        $skip: option.skip,
      });
    }
    if (option.limit) {
      pipeline.push({
        $limit: option.limit,
      });
    }

    pipeline.push(
      {
        $lookup: {
          from: 'users',
          localField: 'createdBy',
          foreignField: '_id',
          as: 'createdBy',
          pipeline: [
            {
              $project: {
                __v: 0,
                password: 0,
                updatedAt: 0,
                createdAt: 0,
              },
            },
            {
              $limit: 1,
            },
          ],
        },
      },
      {
        $project: {
          __v: 0,
          updatedAt: 0,
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    );
    return Note.aggregate(pipeline);
  };

  count = async () => {
    return Note.countDocuments();
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
