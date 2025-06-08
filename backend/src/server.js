import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();


const app=express();
connectDB();
app.use(express.json());

app.use("/api/notes", notesRoutes);



app.listen(process.env.port,() => {
    console.log("server started on port :",process.env.port);

});

