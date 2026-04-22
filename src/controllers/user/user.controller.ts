import { Request, Response } from "express";
import userService from "../../services/user.service";
import { successMessage } from "../../constants/success.constants";

class UserController {
  async create(req:Request, res:Response) {
    const user = await userService.create(req.body);
    res.status(201).json({ message: successMessage.USER_CREATE_SUCCESS, user });
  }

  async getAll(req:Request, res:Response) {
    const users = await userService.findAll();
    res.status(200).json({ message: successMessage.USER_DISPLAY_SUCCESS, users });
  }

  async getOne(req:Request, res:Response) {
    const user = await userService.findById(req.params.id as string);
    res.status(200).json({ message: successMessage.USER_DISPLAY_SUCCESS, user });
  }

  async update(req:Request, res:Response) {
    const user = await userService.update(req.params.id as string, req.body);
    res.status(200).json({ message: successMessage.USER_UPDATE_SUCCESS, user });
  }

  async delete(req:Request, res:Response) {
    const user = await userService.delete(req.params.id as string);
     res.status(200).json({ message: successMessage.USER_DELETE_SUCCESS, user });
  }
}

export default new UserController();
