import { UserRepository } from '../repositories/user.repository';

export class UserService {
  private readonly userServicerepository = new UserRepository();

  createUser = async (data: any) => {
    return this.userServicerepository.create(data);
  };

  getAllUsers = async () => {
    return this.userServicerepository.findAll();
  };

  getUserById = async (id: string) => {
    return this.userServicerepository.findById(id);
  };

  updateUserById = async (id: string, data: any) => {
    return this.userServicerepository.updateById(id, data);
  };

  deleteUserById = async (id: string) => {
    return this.userServicerepository.deleteById(id);
  };
}
