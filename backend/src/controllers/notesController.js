export function getAllNotes (req,res)  {
    res.status(200).send("you just fetched the notes");
}

export function createNote (req,res) {
    res.status(201).json({messgae: "note create succesfully"});
}

export function updateNote (req,res) {
    res.status(200).json({messgae: "note updated succesfully"});
}

export function deleteNote(req,res) {
    res.status(200).json({messgae: "note deleted succesfully"});
}