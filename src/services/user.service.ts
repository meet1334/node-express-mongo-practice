import { UserRepository } from '../repositories/user.repository';

export class UserService {
  private readonly userServicerepository = new UserRepository();

  async create(data: any) {
    return this.userServicerepository.create(data);
  }

  async findAll() {
    return this.userServicerepository.find();
  }

  async findById(id: string) {
    return this.userServicerepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.userServicerepository.update(id, data);
  }

  async delete(id: string) {
    return this.userServicerepository.delete(id);
  }
}
