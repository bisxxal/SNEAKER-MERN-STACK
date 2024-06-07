import express from "express";
import multer from "multer";
import { addShoes, listShoes, removeShoes } from "../controller/shoesController.js";
const shoesRouter = express.Router()

const storage = multer.diskStorage({
    destination:'upload',
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})
shoesRouter.post("/createorder",upload.single("image"), addShoes )
shoesRouter.get("/list",listShoes)
shoesRouter.post("/remove", removeShoes)

export default shoesRouter 