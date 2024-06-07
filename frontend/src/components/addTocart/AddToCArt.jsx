
import React, { useContext, useEffect, useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io"
import { StoreContext } from '../Context/StoreContext.jsx';
import { IoIosAddCircleOutline } from "react-icons/io";
import assets from '../../assets/assets.js';

function AddToCArt({item , setShow , show}) {
    const {url ,cartItems ,list , setList , addToCart , removeFromCart} = useContext(StoreContext)
  return (
    
     <div className=' w-[90%] absolute left-[20px] lg:left-[70px] top-[50px] rounded-3xl  mx-auto h-[26vh] lg:h-[50vh] flex backdrop-blur-md bg-[#00000059] overflow-hidden '>
     

     <div className=' w-1/4'>
             <img className='w-full h-full object-contain bg-white' src={`${url}/images/${item.image}`} alt="" />
     </div>

     <div className=' w-[75%] px-10 flex py-10 justify-between '>
         <div>
             <h1 className=' lg:text-[30px]  text-[20px] font-semibold' > {item.description} </h1>
             <h1 className='text-2xl text-gray-500 '>{item.name}</h1>
             <p>Price : ₹ {item.price}</p>


      <div className=' mt-5 w-[70%] lg:w-1/3 '>
      {
         !cartItems[item._id] ?  <IoIosAddCircleOutline  onClick={()=> addToCart(item._id)} className=' text-[34px] lg:text-[40px] text-green-300' />
         :
         <div className='flex items-center justify-between gap-2 border-green-600 border bg-[#29ff291f] rounded-full px-1 lg:px-2 '>
           <IoIosRemoveCircleOutline onClick={()=>removeFromCart(item._id)} className='  text-[34px] lg:text-[40px] text-[red]'/>
           <p className=' font-semibold text-xl'>{cartItems[item._id]}</p>
           <IoIosAddCircleOutline  onClick={()=> addToCart(item._id)} className=' text-[34px] lg:text-[40px]  text-green-300' />
         </div>
       }
      </div>
         </div >
         <div className='text-3xl lg:px-4 ' onClick={()=> setShow(!show)} >
          <h1 className='rounded-lg border cursor-pointer text-center w-[40px] py-1 h-[40px]'>X</h1>
         </div>
     </div>
</div> 
  )
}

export default AddToCArt