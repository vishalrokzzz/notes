import mongoose  from "mongoose";

const noteSchama = new mongoose.Schema(
    {
    title: {
        type: String,
        required:true
    },
    content: {
        type:String,
        required:true
    },

},
{timestamps : true}
);

const Note= mongoose.model("Note",noteSchama);
export default Note