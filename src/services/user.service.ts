import { UserRepository } from '../repositories/user.repository';

import { getPaginationOptions, formatPaginatedResponse } from '../helpers/pagination.helper';

export class UserService {
  private readonly userServicerepository = new UserRepository();

  createUser = async (data: any) => {
    return this.userServicerepository.create(data);
  };

  getAllUsers = async (query: any) => {
    const { page, limit, skip } = getPaginationOptions(query);
    const users = await this.userServicerepository.findAllWithPagination({ skip, limit, search: query.search });
    const total = await this.userServicerepository.count();
    return formatPaginatedResponse(users, total, page, limit);
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
