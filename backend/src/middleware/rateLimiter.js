import ratelimit from "../config/upstash.js";

const ratelimiter=async (req,res,next) =>{
    try {
        const {success}=await ratelimit.limit("what to limit");
        if (!success){
            return res.status(429).json({message:"too many requests"});
        }
        next();
        
    } catch (error) {
        console.log("rate limit error",error);
        next();
        
    }

}
export default ratelimiter;