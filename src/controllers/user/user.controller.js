const userService = require("../../services/user.service");

class UserController {
  async create(req, res) {
    const user = await userService.create(req.body);
    res.json(user);
  }

  async getAll(req, res) {
    const users = await userService.findAll();
    res.json(users);
  }

  async getOne(req, res) {
    const user = await userService.findById(req.params.id);
    res.json(user);
  }

  async update(req, res) {
    const user = await userService.update(req.params.id, req.body);
    res.json(user);
  }

  async delete(req, res) {
    const user = await userService.delete(req.params.id);
    res.json(user);
  }
}

module.exports = new UserController();
