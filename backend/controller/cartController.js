import userModel from "../models/userModel.js";

export const createOrder = async (req,res)=>{
    try {
        
        const {itemId ,userId} = req.body
        const user = await userModel.findById(userId)
        const cartData = await user.cartData

        if(!cartData[itemId]){
            cartData[itemId] = 1;
        }
        else{
            cartData[itemId] += 1;
        }

        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({ success: true, message: "Added to cart"  })
 
    } catch (error) {
        console.log("error in addtoCartController =>>>>", error);
        return res.json({ success: false, message: "error" });
    }
}
export const removeFromCart = async (req,res)=>{
    try {
        
        const {itemId ,userId} = req.body
        const user = await userModel.findById(userId)
        const cartData = await user.cartData

        if(cartData[itemId]>0){
            cartData[itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({ success: true, message: "Added to cart"  })
 
    } catch (error) {
        console.log("error in removeFromCartController =>>>>", error);
        return res.json({ success: false, message: "error" });
    }
}
export const getCart = async (req, res) => {

    try {
      let userData = await userModel.findById(req.body.userId)
      let cartData = await userData.cartData;
  
      res.json({ success: true, cartData})
    } catch (error) {
      console.log("error in getCartController =>>>>", error);
      return res.json({ success: false, message: "error" });
    }
  };
  