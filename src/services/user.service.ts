import UserRepository from "../repositories/user.repository";

class UserService {
  async create(data:any) {
    return UserRepository.create(data);
  }

  async findAll() {
    return UserRepository.find();
  }

  async findById(id:string) {
    return UserRepository.findById(id);
  }

  async update(id:string, data:any) {
    return UserRepository.update(id, data);
  }

  async delete(id:string) {
    return UserRepository.delete(id);
  }
}

export default new UserService();
