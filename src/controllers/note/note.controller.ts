import { Request, Response } from 'express';
import noteService from '../../services/note.service';
import { successMessage } from '../../constants/success.constants';

class NoteController {
  async create(req: Request, res: Response) {
    const note = await noteService.create(req.body);
    res.status(201).json({ message: successMessage.NOTE_CREATE_SUCCESS, note });
  }

  async getAll(req: Request, res: Response) {
    const notes = await noteService.findAll();
    res.status(200).json({ message: successMessage.NOTE_DISPLAY_SUCCESS, notes });
  }

  async getOne(req: Request, res: Response) {
    const note = await noteService.findById(req.params.id as string);
    res.status(200).json({ message: successMessage.NOTE_DISPLAY_SUCCESS, note });
  }

  async update(req: Request, res: Response) {
    const note = await noteService.update(req.params.id as string, req.body);
    res.status(200).json({ message: successMessage.NOTE_UPDATE_SUCCESS, note });
  }

  async delete(req: Request, res: Response) {
    const note = await noteService.delete(req.params.id as string);
    res.status(200).json({ message: successMessage.NOTE_DELETE_SUCCESS, note });
  }
}

export default new NoteController();
