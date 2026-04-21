import { Request, Response } from "express";
import noteService from "../../services/note.service";

class NoteController {
    async create(req:Request, res:Response) {
        const note = await noteService.create(req.body);
        res.json(note);
    }

    async getAll(req:Request, res:Response) {
        const notes = await noteService.findAll();
        res.json(notes);
    }       

    async getOne(req:Request, res:Response) {
        const note = await noteService.findById(req.params.id);
        res.json(note);
    }

    async update(req:Request, res:Response) {
        const note = await noteService.update(req.params.id, req.body);
        res.json(note);
    }

    async delete(req:Request, res:Response) {
        const note = await noteService.delete(req.params.id);
        res.json(note);
    }
}

export default new NoteController();