import shoesModel from "../models/ShoesModel.js";
import fs from 'fs'
export const addShoes = async(req,res)=>{
    try {
        let image_fileName = `${req.file.filename}`;
        console.log(image_fileName);
        const { name  , description,price ,category } =req.body
        
        const createShoes = new shoesModel({
            name  , description,price ,
            category,
            image : image_fileName
        })
        await createShoes.save()
        res.json({success:true ,message:"shoes added"})
    } catch (error) {
        console.log('error inn addshoes route =>>>>' , error);
        res.json({success:false ,message:"Error "})
    }
} 
export const listShoes = async(req,res)=>{
    try {
        const allShoes = await shoesModel.find()
        res.json({success:true ,allShoes}) 
    } catch (error) {
        console.log('error inn listShoes route =>>>>' , error);
        res.json({success:false ,message:"Error "})
    }
}
export const removeShoes = async(req,res)=>{
    try {
        const shoes = await shoesModel.findById(req.body.id);
        if(!shoes){
            return res.json({success:false , message:"Shoes not Exist"})
        }
        fs.unlink(`upload/${shoes.image}`,()=>{})

        await shoesModel.findByIdAndDelete(req.body.id)
        res.json({success:true ,message:"food removed "})

    } catch (error) {
        console.log('error in removeshoes route =>>>>' , error);
        res.json({success:false ,message:"Error "})
    }
} 