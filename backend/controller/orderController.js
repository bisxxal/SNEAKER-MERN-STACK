import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import crypto from 'crypto'  
import Razorpay from 'razorpay'


 
export const placeOrder = async (req,res)=>{
    try {

      const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRECT,
  });
       const url = 'https://sneaker-bsya.onrender.com'
       const { userId , items ,amount,address} = req.body;
       const newOrder = new orderModel({
         userId , items ,amount,address  
        })
        await newOrder.save();
         
       await userModel.findByIdAndUpdate(userId,{cartData:{}});

    const options = {
      amount: amount * 100, 
      currency: "INR",
      receipt: newOrder._id.toString()  
  }; 
  
  const order = await instance.orders.create(options);
      

        res.json({ success: true ,order ,newOrder })
 
    } catch (error) {
        
    }
}
export const verifyPayment = async (req, res) => {
  try {
     
      const { order_id, payment_id, razorpay_signature,orgOrder } = req.body;

      const generated_signature = crypto.createHmac('sha256', process.env.KEY_SECRECT)
          .update(`${order_id}|${payment_id}`)
          .digest('hex');
           
      if (generated_signature === razorpay_signature) {
       
        // Update the order status in the database
          await orderModel.findByIdAndUpdate(orgOrder, {payment:true} );

          res.json({ success: true, message: 'Payment verified successfully' });
      } else {
        await orderModel.findByIdAndDelete(orgOrder);
          res.status(400).json({ success: false, message: 'Payment verification failed' });
      }
  } catch (error) {
      console.error('Error in verifyPayment:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
export const listOrder = async (req,res)=>{
    try {
      const order = await orderModel.find({})
      res.json({success:true , order})
    } catch (error) {
      console.log("error in listOrder route",error);
      return res.json({status:false,message:"error"})
    }
}
export const userOrder = async (req,res)=>{
    try {
      const order = await orderModel.find({userId:req.body.userId})
      res.json({success:true , order})
    } catch (error) {
      console.log("error in userOrder route",error);
      return res.json({status:false,message:"error"})
    }
}
export const updateOrder= async (req,res)=>{
  try {
     const orders = await orderModel.findByIdAndUpdate(req.body.orderId , {status:req.body.status}) 
     res.json({success:true,message:"status updated"})
  } catch (error) {
      console.log("error in updateOrder route",error);
      return res.json({status:false,message:"error"})
  }
}
