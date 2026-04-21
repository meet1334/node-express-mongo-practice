const noteService = require("../../services/note.service");

class NoteController {
    async create(req, res) {
        const note = await noteService.create(req.body);
        res.json(note);
    }

    async getAll(req, res) {
        const notes = await noteService.findAll();
        res.json(notes);
    }       

    async getOne(req, res) {
        const note = await noteService.findById(req.params.id);
        res.json(note);
    }

    async update(req, res) {
        const note = await noteService.update(req.params.id, req.body);
        res.json(note);
    }

    async delete(req, res) {
        const note = await noteService.delete(req.params.id);
        res.json(note);
    }
}

module.exports = new NoteController();