import React from 'react'
import { useNavigate } from 'react-router-dom'

function ViewAllCateGory() {
    const navigater= useNavigate()
  return (
    <div className='group relative w-full h-[250px] lg:h-[350px] px-4 lg:px-0 rounded-[60px] overflow-hidden bg-zinc-750 my-16 text-[#ffffff9c]'>
    <h1
    onClick={() => navigater('/category')} 
     className=' max-md:text-[40px] text-[150px] z-[1] left-10 top-1/4 max-lg:top-[30%] max-lg:left-[20%] font-bold absolute'>VIEW ALL PAIRS &gt; </h1>
    <img 
      onClick={() => navigater('/category')} 
      className='w-full h-full object-cover rounded-[60px] group-hover:blur-[10px] transition-all duration-300 ease-in-out' 
      src="https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="" 
    />
  </div>
  
  )
}

export default ViewAllCateGory
