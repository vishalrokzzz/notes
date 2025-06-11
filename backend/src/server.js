import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/rateLimiter.js";
import cors from "cors"
import path from "path"



dotenv.config();

const app=express();
connectDB();
app.listen(process.env.port,() => {
    console.log("server started on port :",process.env.port);

});

const __dirname=path.resolve()




if (process.env.NODE_ENV !== "production"){
    app.use(cors({
    origin:"http://localhost:5173",
})); 

}





app.use(express.json());

app.use(ratelimiter);


app.use((req,res,next)=> {
    console.log(`received a ${req.method} request from ${req.url}`);
    next();

})



app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
});

}




