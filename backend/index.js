import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connect from './config/db.js';
import userRouter from './router/UserRoter.js';
import orderRouter from './router/orderRouter.js';
import shoesRouter from './router/shoesRouter.js';
import cartRouter from './router/cartRouter.js';

const app = express();
dotenv.config();

app.use(express.json())
app.use(cors())
connect()


app.use("/api/user" ,userRouter)
app.use("/api/order",orderRouter)
app.use("/api/cart",cartRouter)
app.use("/api/shoes",shoesRouter)
app.use ('/images' , express.static('upload'))
app.post('/api/key',(req,res)=>res.json({key:process.env.KEY_ID}) )

const port = process.env.PORT 
app.listen(port , ()=>{
    console.log(`server runnning on ${port}`);
})