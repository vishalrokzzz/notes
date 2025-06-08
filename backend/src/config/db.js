import mongoose from "mongoose"
export const connectDB= async() =>{
    try {
        await mongoose.connect(process.env.mongo_url);
        console.log("mongoDB connected succesfully");
    } catch (error) {
        console.error("error conecting to mongoDB",error);
        process.exit(1);
    }
}