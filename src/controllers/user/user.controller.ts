import { Request, Response } from 'express';
import { successMessage } from '../../constants/success.constants';
import { HttpCode } from '../../exceptions/AppError';
import { errorMessage } from '../../constants/error.constants';
import { UserService } from '../../services/user.service';

class UserController {
  private readonly userService = new UserService();
  async create(req: Request, res: Response) {
    try {
      const user = await this.userService.create(req.body);
      return res.status(HttpCode.CREATED).json({ message: successMessage.USER_CREATE_SUCCESS, user });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await this.userService.findAll();
      res.status(HttpCode.OK).json({ message: successMessage.USER_DISPLAY_SUCCESS, users });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const user = await this.userService.findById(req.params.id as string);
      res.status(HttpCode.OK).json({ message: successMessage.USER_DISPLAY_SUCCESS, user });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const user = await this.userService.update(req.params.id as string, req.body);
      res.status(HttpCode.OK).json({ message: successMessage.USER_UPDATE_SUCCESS, user });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const user = await this.userService.delete(req.params.id as string);
      res.status(HttpCode.OK).json({ message: successMessage.USER_DELETE_SUCCESS, user });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  }
}

export default new UserController();
