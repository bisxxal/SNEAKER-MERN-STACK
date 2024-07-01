import React, { useContext, useEffect, useState } from 'react'
import cate from '../../assets/assets.js'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import axios from 'axios';
import { StoreContext } from '../Context/StoreContext.jsx';
import { IoIosAddCircleOutline } from "react-icons/io";
import AddToCArt from '../addTocart/AddToCArt.jsx';
function DisplayShoes({categorie , setCatrgorie}) {
    const {url ,cartItems ,list , setList , addToCart , removeFromCart} = useContext(StoreContext)
    const [showItemDetails, setShowItemDetails] = useState({});

    
    const [show , setShow] = useState(false)
  return (
    
    <div className='w-full  min-h-screen pb-5'>
         <h1 className='text-[30px] font-bold'>Chose Your Best Pair.</h1>

        <div className='flex lg:gap-10 relative flex-wrap justify-evenly lg:justify-center'>
        {
            list ? list.map((item,index)=>{
           
                if(categorie === 'All' || categorie === item.category){
                return(
            <div key={index} className='containter bg-zinc-800 w-[190px] lg:w-[250px] lg:h-[310px] overflow-hidden rounded-xl mt-4 '>
            <div className='bg-[white]'>
            <img className='w-full h-[150px] lg:h-[206px] object-contain ' src={`${url}/images/${item.image}`} alt="" />
            </div>


            <div className='flex  justify-end px-3 mt-1'>
              {/* {
                !cartItems[item._id] ?  <IoIosAddCircleOutline  onClick={()=> addToCart(item._id)} className='text-[30px] hover:text-green-500' />
                :
                <div className='flex items-center justify-between gap-2 bg-[#0000007c] rounded-full px-1 '>
                  <IoIosRemoveCircleOutline onClick={()=>removeFromCart(item._id)} className='text-[30px] hover:text-red-500'/>
                  <p>{cartItems[item._id]}</p>
                  <IoIosAddCircleOutline  onClick={()=> addToCart(item._id)} className='text-[30px]  hover:text-green-500' />
                </div>
              } */}
        <IoIosAddCircleOutline  onClick={()=>{setShowItemDetails(item) 
          setShow(!show)}} className='text-[30px]' />
        {
          show ? <AddToCArt item={showItemDetails}   setShow={setShow} show={show} /> :''
        }

            </div>


            <div className=' px-2 pb-1 lg:pb-2'>
                <h1 className=' text-[gray]'>{item.name}</h1>
                <p className=' text-[12px]'>{item.description}</p>
                <p className=' font-semibold '>₹ {item.price}</p>
            </div>
        </div>
                )
            }
        
      }) :''
        }
        </div>
    </div>
  )
}

export default DisplayShoes
