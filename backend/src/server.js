import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app=express();
connectDB();

app.use(express.json());

app.use(ratelimiter);

app.use((req,res,next)=> {
    console.log(`received a ${req.method} request from ${req.url}`);
    next();

})



app.use("/api/notes", notesRoutes);



app.listen(process.env.port,() => {
    console.log("server started on port :",process.env.port);

});

