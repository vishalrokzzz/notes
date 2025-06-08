import Note from "../models/Note.js";

export async function getAllNotes (_,res)  {
    try {
        const notes= await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
        
    } catch (error) {
        console.error("error in get all notes controller",error);
        res.status(500).json({message: "internal server error"});        
    }

    
}

export async function createNote (req,res) {
    try {
        const {title,content}= req.body;
        const note=new Note({title:title , content:content});
        const savedNote= await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("error in create note controller",error);
        res.status(500).json({message: "internal server error"});        
    }
}

export async function updateNote (req,res) {
    try {
        const {title,content}=req.body;
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});
        if (!updatedNote){
            return res.status(404).json({message: "id not found"});
        }
        res.status(200).json({updatedNote});
    } catch (error) {
        console.error("error in update note controller",error);
        res.status(500).json({message: "internal server error"}); 
    }
}

export async function deleteNote(req,res) {
    try {
        const id=req.params.id
        const deletedNote= await Note.findByIdAndDelete(id);
        if (!deletedNote){
            return res.status(404).json({message: "id not found"});
        }
        res.status(200).json(deletedNote);
        
    } catch (error) {
        console.error("error in delete note controller",error);
        res.status(500).json({message: "internal server error"}); 
    }
}

export async function getNodeById (req,res){
    try {
        const id=req.params.id;
        const note=await Note.findById(id)
        if (!note){return res.status(404).json({message: "id not found"})};
        res.status(200).json(note);
        
    } catch (error) {
        res.error("error in get a specific node controller");
        res.status(500).json({message : "internal server error"});
        
    }
}