import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Razorpay from 'razorpay'
import crypto from 'crypto' 
const instance = new Razorpay({
  key_id: 'rzp_test_vUiIG1Qsr3bVDh',
  key_secret: 'tnRNzTtbcnR6sKbG4JzVOlRA',
});

export const placeOrder = async (req,res)=>{
    try {
       const url = 'http://localhost:5173'
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
  // console.log('Creating Razorpay order with options:', options);
  const order = await instance.orders.create(options);
        // console.log('Razorpay Order:', order);

        res.json({ success: true ,order ,newOrder })
 
    } catch (error) {
        
    }
}
export const verifyPayment = async (req, res) => {
  try {
     
      const { order_id, payment_id, razorpay_signature,orgOrder } = req.body;

      const generated_signature = crypto.createHmac('sha256', 'tnRNzTtbcnR6sKbG4JzVOlRA')
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