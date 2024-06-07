import React, { useContext } from 'react'
import assets from '../../assets/assets'
import { RxCrossCircled } from "react-icons/rx";
import { StoreContext } from '../../components/Context/StoreContext';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const {list , setList,cartItems,url ,removeFromCart ,gettotolCartItem,setDis ,discount } = useContext(StoreContext)
  const navigate = useNavigate()
  
  return (
    
        <div className='pt-24 min-h-screen px-4 lg:px-32 '>
      <h1 className='text-3xl font-bold'>  Your Basket .</h1>
      
      
<div className='flex lg:flex-row flex-col justify-between'>
  
<div className=' w-full lg:w-1/2'>
        {
          list && list.length > 0 ? (
         list.map((item, index)=>{
              if(cartItems[item._id] >0){
                return(
                  <div className='flex w-full bg-zinc-800 mt-3 py-2 lg:gap-0  gap-5 rounded-md'>
                  <div className=' lg:w-1/4 flex items-center justify-center pl-3'>
                  <img className='w-[100px] object-contain h-[97px] lg:h-[100px] rounded-lg bg-white '  src={url+'/images/'+item.image} alt="" />
                  </div>
                  <div className='flex w-[75%] flex-col gap-[1px] lg:gap-1'>
                  <p className=' font-medium'>
                      {item.description} 
                      </p>
                    <h1 className=' text-gray-400' >{item.name}</h1>
                    <p className='font-semibold' >
                    ₹ {item.price } 
                      </p>
                    <h1>Qty: 
                      {cartItems[item._id]} 
                      </h1>
                    <div className='flex mt-2 pr-20 w-full justify-between items-center '>
                         <div className='flex items-center gap-2'> remove <RxCrossCircled
                             onClick={()=> removeFromCart(item._id)}
                              className="text-[25px] cursor-pointer hover:text-red-500"
                            /></div>
                       <p> Total :
                    ₹ {item.price * cartItems[item._id]} 
                      </p>
                    </div>
                 
                  </div>
                </div>
                )
              }
          }) 
        ) : (
          <div className=' text-center text-3xl'>Make Your Order Now</div>
        )
        }
      </div>


     <div className=' items-end flex  w-full lg:w-1/2 flex-col'>
     <div className=' w-full mt-8 lg:mt-0 lg:w-[70%]  px-10 py-10 flex flex-col gap-5 bg-zinc-800 rounded-lg'>
          <div className=' flex justify-between w-full border-b pb-3 border-[#ffffff44]'> <h1>SubTotal:</h1> <p> ₹  {gettotolCartItem() > 0 ? gettotolCartItem() : '0'}</p> </div>
          <div className=' flex justify-between w-full border-b pb-3 border-[#ffffff44]'><h1>Delivery Charges:</h1> <p> ₹  {gettotolCartItem() > 0 ? "200" : '0'}</p> </div>
          <div className=' flex justify-between w-full border-b pb-3 border-[#ffffff44] text-lg font-semibold'> <h1>Grand Total</h1> <h1> ₹  {discount()}</h1> </div>

          <button onClick={()=>navigate('/cheakout')} className=' bg-green-500 py-3 rounded-xl font-semibold text-lg'>Cheakout</button>
      </div> 

      <div className="cart-promocode w-full lg:w-[70%] rounded-xl bg-zinc-800 px-7 py-4 mt-5 lg:mb-0 mb-7">
          <div>
            <p>If You have a promo code , Enter it here</p>
            <dir  className="border flex justify-between w-[90%] rounded-lg overflow-hidden mt-4 border-[#ffffff65]">
            <input onChange={(e)=>setDis(e.target.value)} className='px-2  rounded py-1 outline-none bg-transparent  ' type="text" placeholder='Enter Promocode'/>
            <button onClick={()=>discount()} className='px-5 py-2  font-semibold text-[13px] bg-blue-500 '>Sumbit</button>
       
            </dir>

                  <p className='mt-8'>Use this PromoCode to get 20% discount</p>
            <div className='font-bold text-xl mt-2 h-14 w-[90%] flex items-center justify-center rounded-lg border border-dashed  '>
                   <span>NEW20</span>
            </div>
          </div>
        </div>
     </div>

</div> 
      </div> 
  )
}

export default Cart