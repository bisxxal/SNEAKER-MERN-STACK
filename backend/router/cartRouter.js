import express from "express";
import { createOrder, getCart, removeFromCart } from "../controller/cartController.js";
import authMiddleware from "../middleware/auth.js";
const cartRouter = express.Router()

cartRouter.post("/createorder",authMiddleware, createOrder )
cartRouter.post("/remove",authMiddleware, removeFromCart)
cartRouter.post("/getcart",authMiddleware, getCart)

export default cartRouter 