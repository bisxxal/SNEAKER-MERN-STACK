import { IoCartOutline } from "react-icons/io5";
import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";


function Navbar() {
  const {token ,gettotolCartItem} = useContext(StoreContext)

  const [click ,setClick] = useState(false)
  return (
   <>
    <div className='w-full  text-white fixed backdrop-blur-sm z-10 bg-[#00000077] h-[55px] px-4 lg:px-16 flex items-center justify-between'>
         <Link className="snker text-[40px] tracking-wider font-bold " to={'/'}> SNKER</Link>

         <div className='hidden lg:flex gap-4 '>
            <Link to={'/'}>HOME</Link>
            <Link to={'/about'}>ABOUT</Link>
            <Link to={'/category'}>CATEGORY</Link>
         </div>

         <div className="flex items-center gap-7">
         <Link className=" relative hidden lg:block" to={'/cart'}>

            <IoCartOutline  className=" text-3xl"/>
            {
              gettotolCartItem() > 0 && (
                <div className="absolute h-3 w-3 rounded-full bg-[#ff2a2add] top-[-2px] right-[-4px] flex items-center justify-center">
                 
                </div>
              )
            }
             </Link>

          { token ? 
             <div className=" group  relative">
               <img className="w-10 h-10  rounded-full" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIs1XePP0G1O0AQB8x6uxPkXyY_PvXlYWGLTJWZfpios_3gsrcqX_jZz1dkxjgCZjrC-w&usqp=CAU' alt="" />
               <div className="  h-32 hidden group-hover:flex gap-4 flex-col px-5 items-center justify-center rounded-md top-[35px] w-40 left-[-60px] bg-[#00000085] backdrop-blur-lg  absolute">
                  <Link to={'/myorder'} className="w-full backdrop-blur-lg bg-[#28ff281e] text-center border border-green-600 py-2 rounded-lg">My Order</Link>
                  <button className="w-full border bg-[#ff00001b] border-red-600 backdrop-blur-lg py-2 rounded-lg">Logout</button>
               </div>
             </div>
             
             : <Link to={'/login'}>Login </Link> 
         }
              
              <div onClick={()=> setClick(!click)} className={`text-[40px] lg:hidden `}> {click ?  "x" :'='}  </div>

         </div>
    </div>


    <div className={`${click ? ' block ' : ' hidden '} w-full pt-20 h-screen bg-[#00000069] `}>
    <div className='flex flex-col text-lg p-10 gap-12'>
    <div className='flex flex-col gap-4 '>
            <Link to={'/'}>HOME</Link>
            <Link to={'/'}>ABOUT</Link>
            <Link to={'/category'}>CATEGORY</Link>
         </div>
      </div>
      <div className=' flex justify-center'>
      <Link className="flex relative items-center gap-5 bg-[#ffffff8d] px-6 py-2 rounded-3xl" to={'/cart'}>
         Go To cart
            <IoCartOutline  className=" text-3xl"/>
           
             </Link>
      </div>
      </div>
             </>
  )
}

export default Navbar