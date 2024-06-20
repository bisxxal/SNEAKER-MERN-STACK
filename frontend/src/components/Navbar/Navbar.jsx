import { IoCartOutline } from "react-icons/io5";
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";


function Navbar() {
  const {token ,gettotolCartItem} = useContext(StoreContext)
  const [show , setShow] = useState(true)
  const [click ,setClick] = useState(false)
  const navigate = useNavigate()
  const goto = ()=>{
   if(!token){
      navigate('/login')
      setClick(!click)
   }
   else{
      navigate('/cart')
      setClick(!click)
   }
  }
  const logout = ()=>{
   localStorage.removeItem("token");
   setToken('')
   navigate('/')
 }
  return (
   <>
      { show ? <div className='fixed z-[11] w-full px-6 lg:px-20 h-[30px] flex items-center justify-between font-medium bg-[#1d7bffaf] '>
          <h1 className=' text-lg mx-auto'>Get 20% off On Your First Order</h1>
          <h1 onClick={()=> setShow(false)} className=' cursor-pointer text-2xl'>x</h1>
      </div> :''}
    <div className={`w-full ${ show?'mt-[30px]':'mt-0' }  text-white fixed backdrop-blur-sm z-10 bg-[#00000077] h-[55px] px-4 lg:px-16 flex items-center justify-between`}>
         <Link className="snker text-[40px] tracking-wider font-bold " to={'/'}> SNKER</Link>

         <div className='hidden lg:flex gap-4 '>
            <Link to={'/'}>HOME</Link>
            <Link to={'/about'}>ABOUT</Link>
            <Link to={'/category'}>CATEGORY</Link>
         </div>

         <div className="flex items-center gap-7">
         <div className=" relative hidden lg:block" onClick={goto} >

            <IoCartOutline  className=" text-3xl"/>
            {
              gettotolCartItem() > 0 && (
                <div className="absolute h-3 w-3 rounded-full bg-[#ff2a2add] top-[-2px] right-[-4px] flex items-center justify-center">
                 
                </div>
              )
            }
             </div>

          { token ? 
             <div className=" group  relative">
               <img className="lg:w-10 w-8 h-8 lg:h-10  rounded-full" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIs1XePP0G1O0AQB8x6uxPkXyY_PvXlYWGLTJWZfpios_3gsrcqX_jZz1dkxjgCZjrC-w&usqp=CAU' alt="" />
               <div className="  h-32 hidden group-hover:flex gap-4 flex-col px-5 items-center justify-center rounded-md top-[35px] w-40 left-[-60px] bg-[#00000085] backdrop-blur-lg  absolute">
                  <Link to={'/myorder'} className="w-full backdrop-blur-lg bg-[#28ff281e] text-center border border-green-600 py-2 rounded-lg">My Order</Link>
                  <button onClick={logout} className="w-full border bg-[#ff00001b] border-red-600 backdrop-blur-lg py-2 rounded-lg">Logout</button>
               </div>
             </div>
             
             : <Link to={'/login'}>Login </Link> 
         }
              
              <div onClick={()=> setClick(!click)} className={`text-[40px] cursor-pointer lg:hidden `}> {click ?  "x" :'='}  </div>

         </div>
    </div>


    <div className={`${click ? ' z-40 fixed top-0 left-0  ' : ' hidden '}   w-full pt-20 h-screen bg-[royalblue] `}>
    
    <div onClick={()=> setClick(!click)} className={`text-[40px] cursor-pointer flex justify-end px-10 w-full lg:hidden `}> x </div>
    <div className='flex flex-col text-lg p-10 gap-12'>
    <div className='flex flex-col gap-4 '>
            <h1 className=" cursor-pointer" onClick={()=> {navigate('/'); setClick(!click) }}>HOME</h1>
            <h1 className=" cursor-pointer" onClick={()=> {navigate('/about'); setClick(!click) }}>ABOUT</h1>
            <h1 className=" cursor-pointer" onClick={()=> {navigate('/category'); setClick(!click) }}>CATEGORY</h1>
         </div>
      </div>
      <div className=' flex justify-center'>
      <div className="flex relative items-center gap-5 bg-[#00a6ffdf] px-6 py-2 rounded-3xl shadow-lg shadow-[#00000087] "  onClick={goto} >
         Go To cart
            <IoCartOutline  className=" text-3xl"/>
           
             </div>
      </div>
      </div>
             </>
  )
}

export default Navbar