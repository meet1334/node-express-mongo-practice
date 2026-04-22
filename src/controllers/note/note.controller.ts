import { Request, Response } from "express";
import noteService from "../../services/note.service";

class NoteController {
  async create(req: Request, res: Response) {
    const note = await noteService.create(req.body);
    res.status(201).json({ message: "Created Note Successfully", note });
  }

  async getAll(req: Request, res: Response) {
    const notes = await noteService.findAll();
    res.json(notes);
  }

  async getOne(req: Request, res: Response) {
    const note = await noteService.findById(req.params.id as string);
    res.json(note);
  }

  async update(req: Request, res: Response) {
    const note = await noteService.update(req.params.id as string, req.body);
    res.json(note);
  }

  async delete(req: Request, res: Response) {
    const note = await noteService.delete(req.params.id as string);
    res.json(note);
  }
}

export default new NoteController();
