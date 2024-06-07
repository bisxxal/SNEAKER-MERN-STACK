import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id)=>{
    return jwt.sign({id} , process.env.JWT_SECRET, { expiresIn: '15d' })
} 
export const register = async(req,res)=>{
    try {
        const {name , password , email} = req.body;
        const existUser = await userModel.findOne({email})
        if(existUser) return res.json({success:false ,message:"user already exist"})
        
        if(password.length < 6){
            return res.json({success:false ,message:"Please enter a strong password"})
        }
   
        const salt = await bcrypt.genSaltSync(10)
        const hashedPassword = await bcrypt.hash(password,salt);

         
        const newUser = new userModel({
            name,email, 
              password:hashedPassword
        })

        const userr = await newUser.save();
        const token = createToken(userr._id)

        const user = userr.toObject();
        delete user.password;

       return res.json({success:true,token});


    } catch (error) {
        console.log("error in register routes=>>>>> ",error);
        return res.json({success:false ,message:"regsiter Error"})   
    }
}

export const login =async(req,res)=>{
    try {

        const { password , email} = req.body;

        const existUser = await userModel.findOne({email})
        if(!existUser) return res.json({success:false ,message:"user not exist"})
        
        const isMatch = await bcrypt.compare(password , existUser.password);
        if(!isMatch) { return res.json({success:false ,message:"Email or Password Incorrect"})}

       const token = createToken(existUser._id)

       const user = existUser.toObject();
       delete user.password;

       return res.json({success:true,token });
    } catch (error) {
        console.log("error in login routes=>>>>> ",error);
        return res.json({success:false ,message:"login Error"})
     }
}