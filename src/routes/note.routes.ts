import { Router } from 'express';
import { NoteController } from '../controllers/note/note.controller';
import middleware from '../middlewares/auth.middleware';

export class NoteRoutes {
  public router = Router();
  private readonly noteController = new NoteController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const auth = middleware.authenticate.bind(middleware);

    this.router.post('/', auth, this.noteController.create);
    this.router.get('/', auth, this.noteController.getAll);
    this.router.get('/:id', auth, this.noteController.getOne);
    this.router.put('/:id', auth, this.noteController.update);
    this.router.delete('/:id', auth, this.noteController.delete);
  }
}
