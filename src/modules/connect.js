import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config()
try {
   mongoose.connect(`mongodb+srv://arafath5023:rockrahim@classmanagement.mry2u.mongodb.net/mentorstudent`) 
   console.log("mongoose connect")
} catch (error) {
    console.log(error)
}

export default mongoose
