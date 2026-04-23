import { Request, Response } from 'express';
import { successMessage } from '../../constants/success.constants';
import { HttpCode } from '../../exceptions/AppError';
import { errorMessage } from '../../constants/error.constants';
import { UserService } from '../../services/user.service';
import customPagination from '../../helpers/customPagination';

export class UserController {
  private readonly userService = new UserService();
  create = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.createUser(req.body);
      return res.status(HttpCode.CREATED).json({ message: successMessage.USER_CREATE_SUCCESS, user });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const paginatedData = await this.userService.getAllUsers(req.query);
      res.status(HttpCode.OK).json({ message: successMessage.USER_DISPLAY_SUCCESS, ...paginatedData });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  };

  getOne = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.getUserById(req.params.id as string);
      res.status(HttpCode.OK).json({ message: successMessage.USER_DISPLAY_SUCCESS, user });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.updateUserById(req.params.id as string, req.body);
      res.status(HttpCode.OK).json({ message: successMessage.USER_UPDATE_SUCCESS, user });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.deleteUserById(req.params.id as string);
      res.status(HttpCode.OK).json({ message: successMessage.USER_DELETE_SUCCESS, user });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  };
}
