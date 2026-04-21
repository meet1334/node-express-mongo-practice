import Note from "../models/note.model";

class NoteService {

    async create(data){
        return Note.create(data);
    }

    async findAll(){
        return Note.find().populate("createdBy");
    }

    async findById(id:string){
        return Note.findById(id);
    }


    async update(id:string, data){
        return Note.findByIdAndUpdate(id, data, {new: true});
    }

    async delete(id:string){
        return Note.findByIdAndDelete(id);
    }
}

export default new NoteService();