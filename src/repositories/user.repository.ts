import { User } from '../models/user.model';

export class UserRepository {
  create = async (data: any) => {
    return User.create(data);
  };

  findAll = async (options: { skip?: number; limit?: number } = {}) => {
    let query = User.find().select('-password -__v').sort({ createdAt: -1 });

    if (options.skip !== undefined) query = query.skip(options.skip);
    if (options.limit !== undefined) query = query.limit(options.limit);

    return query;
  };

  findAllWithPagination = async (option: { skip: number; limit: number; search: string }) => {
    const pipeline: any[] = [];

    if (option.search) {
      pipeline.push({
        $match: {
          $or: [
            { first_name: { $regex: option.search, $options: 'i' } },
            { last_name: { $regex: option.search, $options: 'i' } },
            { username: { $regex: option.search, $options: 'i' } },
          ],
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
        $project: {
          __v: 0,
          password: 0,
        },
      },

      {
        $sort: {
          createdAt: -1,
        },
      },
    );
    return User.aggregate(pipeline);
  };

  count = async () => {
    return User.countDocuments();
  };
  findById = async (id: string) => {
    return User.findById(id).select('-password -__v');
  };

  updateById = async (id: string, data: any) => {
    return User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }).select('-password -__v');
  };

  deleteById = async (id: string) => {
    return User.findByIdAndDelete(id);
  };
}
