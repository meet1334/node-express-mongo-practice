const Note = require("../models/note.model");

class NoteService {

    async create(data){
        return Note.create(data);
    }

    async findAll(){
        return Note.find().populate("createdBy");
    }

    async findById(id){
        return Note.findById(id);
    }


    async update(id, data){
        return Note.findByIdAndUpdate(id, data, {new: true});
    }

    async delete(id){
        return Note.findByIdAndDelete(id);
    }
}

module.exports = new NoteService();