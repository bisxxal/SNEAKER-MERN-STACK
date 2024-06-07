import mongoose from "mongoose";

const connect = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_DB_URL) .then(()=>{
            console.log("db connected");
        })
    } catch (error) {
        console.log("db errror" , error);
    }
}

export default connect 