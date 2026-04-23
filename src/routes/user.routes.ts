import { Router } from 'express';
import { UserController } from '../controllers/user/user.controller';
import middleware from '../middlewares/auth.middleware';
import { uploadIMage } from '../middlewares/multer.middleware';

// apply middleware to all routes below
// router.use(middleware.authenticate.bind(middleware));

export class UserRoutes {
  public router = Router();
  private readonly userController = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const auth = middleware.authenticate.bind(middleware);

    this.router.post('/', auth, this.userController.create);
    this.router.get('/', auth, this.userController.getAll);
    this.router.get('/:id', auth, this.userController.getOne);
    this.router.put('/:id', auth, this.userController.update);
    this.router.put('/update-image/:id', auth, uploadIMage.single('file'), this.userController.updateProfileImage);
    this.router.delete('/:id', auth, this.userController.delete);
  }
}
