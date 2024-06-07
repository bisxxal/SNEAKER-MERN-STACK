import express from "express";
import { listOrder, placeOrder, updateOrder, userOrder, verifyPayment } from "../controller/orderController.js";
import authMiddleware from "../middleware/auth.js";
const orderRouter = express.Router()

orderRouter.post("/createorder", authMiddleware ,  placeOrder )
orderRouter.post('/verify' , verifyPayment)
orderRouter.post("/userorder",authMiddleware, userOrder)
orderRouter.post("/list" , listOrder)
orderRouter.post("/updateorder" , updateOrder)
 
export default orderRouter 