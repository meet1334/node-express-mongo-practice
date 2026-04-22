import { User } from '../models/user.model';

export class UserRepository {
  create = async (data: any) => {
    return User.create(data);
  };

  findAll = async () => {
    return User.find().select('-password -__v').sort({ createdAt: -1 });
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
