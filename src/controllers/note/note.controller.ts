import { Request, Response } from 'express';
import { successMessage } from '../../constants/success.constants';
import { HttpCode } from '../../exceptions/AppError';
import { errorMessage } from '../../constants/error.constants';
import { NoteService } from '../../services/note.service';

export class NoteController {
  private readonly noteService = new NoteService();

  create = async (req: Request, res: Response) => {
    try {
      const note = await this.noteService.createNote(req.body);
      return res.status(HttpCode.CREATED).json({ message: successMessage.NOTE_CREATE_SUCCESS, note });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const paginatedData = await this.noteService.getAllNotes(req.query);
      res.status(HttpCode.OK).json({ message: successMessage.NOTE_DISPLAY_SUCCESS, ...paginatedData });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  };

  getOne = async (req: Request, res: Response) => {
    try {
      const note = await this.noteService.getNoteById(req.params.id as string);
      res.status(HttpCode.OK).json({ message: successMessage.NOTE_DISPLAY_SUCCESS, note });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const note = await this.noteService.updateNote(req.params.id as string, req.body);
      res.status(HttpCode.OK).json({ message: successMessage.NOTE_UPDATE_SUCCESS, note });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const note = await this.noteService.deleteNoteById(req.params.id as string);
      res.status(HttpCode.OK).json({ message: successMessage.NOTE_DELETE_SUCCESS, note });
    } catch (error) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.SOMETHING_WRONG, error });
    }
  };
}
