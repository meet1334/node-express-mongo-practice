const User = require("../models/user.model");

class UserService {
  async create(data) {
    return User.create(data);
  }

  async findAll() {
    return User.find();
  }

  async findById(id) {
    return User.findById(id);
  }

  async update(id, data) {
    return User.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return User.findByIdAndDelete(id);
  }
}

module.exports = new UserService();
