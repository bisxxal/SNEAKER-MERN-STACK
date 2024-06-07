import mongoose from "mongoose";

const shoesSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }, 
})

const shoesModel = mongoose.model('shoes',shoesSchema)
export default shoesModel