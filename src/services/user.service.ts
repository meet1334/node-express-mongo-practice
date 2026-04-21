import User from "../models/user.model";

class UserService {
  async create(data) {
    return User.create(data);
  }

  async findAll() {
    return User.find();
  }

  async findById(id:string) {
    return User.findById(id);
  }

  async update(id:string, data) {
    return User.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id:string) {
    return User.findByIdAndDelete(id);
  }
}

export default new UserService();
