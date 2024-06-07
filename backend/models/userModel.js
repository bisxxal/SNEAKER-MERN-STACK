import mongoose from "mongoose";

const userScema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        min:3
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    cartData:{
        type:Object,
        default:{},
    },
})

const userModel = mongoose.model("user" , userScema)

export default userModel