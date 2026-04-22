import { Request, Response } from "express";
import userService from "../../services/user.service";

class UserController {
  async create(req:Request, res:Response) {
    const user = await userService.create(req.body);
    res.json(user);
  }

  async getAll(req:Request, res:Response) {
    const users = await userService.findAll();
    res.json(users);
  }

  async getOne(req:Request, res:Response) {
    const user = await userService.findById(req.params.id as string);
    res.json(user);
  }

  async update(req:Request, res:Response) {
    const user = await userService.update(req.params.id as string, req.body);
    res.json(user);
  }

  async delete(req:Request, res:Response) {
    const user = await userService.delete(req.params.id as string);
    res.json(user);
  }
}

export default new UserController();
