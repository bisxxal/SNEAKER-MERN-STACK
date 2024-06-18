import React, { useContext, useEffect, useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io"
import { StoreContext } from '../Context/StoreContext.jsx';
import { IoIosAddCircleOutline } from "react-icons/io";
import AddToCArt from '../addTocart/AddToCArt.jsx';
function NewArival() {
    const {url ,cartItems ,list , setList , addToCart , removeFromCart} = useContext(StoreContext)
 
    const [showItemDetails, setShowItemDetails] = useState({});

    
    const [show , setShow] = useState(false)
  return (
    <div className='w-full min-h-[70vh]   mt-10  lg:px-0 '>
        <h1 className='text-[30px] font-bold'> New Arrivals</h1>
        <div className='flex lg:gap-10 flex-wrap justify-evenly lg:justify-center'>
        {
            list ? list.slice(0,5).map((item,index)=>{
                return(
            <div key={index} className='containter bg-zinc-800 w-[190px] lg:w-[250px] lg:h-[310px] overflow-hidden rounded-xl mt-4 '>
            <div className='bg-[white]'>
            <img className='w-full h-[150px] lg:h-[206px] object-contain '  src={`${url}/images/${item.image}`} alt="" />
            </div>
            <div className='flex justify-end px-3 mt-2'>
              
        <IoIosAddCircleOutline  onClick={()=>{setShowItemDetails(item) 
          setShow(!show)}} className='text-[30px] hover:text-green-500' />
        {
          show ? <AddToCArt item={showItemDetails}   setShow={setShow} show={show} /> :''
        }
            </div>


            <div className=' px-4'>
                <h1 className=' text-[gray]'>{item.name}</h1>
                <p className=' text-[12px]'>{item.description}</p>
                <p className=' font-semibold '>₹ {item.price}</p>
            </div>
        </div>
                )
      }) :''
        }
           
        </div>
    </div>
  )
}

export default NewArival