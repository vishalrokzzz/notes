import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();


const app=express();
connectDB();

app.use("/api/notes", notesRoutes);



app.listen(process.env.port,() => {
    console.log("server started on port :",process.env.port);

});

// mongodb+srv://vishaldasari696:kTDwhqCzx8oBLkP3@cluster0.u2bdfap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0