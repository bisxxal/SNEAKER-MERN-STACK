import React from 'react'
import Order from '../orders/Order'
import ListShoes from '../list/ListShoes'
import AddShoes from '../AddShoes/AddShoes'
import { useState } from 'react'
function Home() {
    const [show ,setShow ] = useState('order')
      const url  = 'https://snkerbackend.onrender.com'
  return (
    <div className='w-full min-h-screen bg-zinc-900 pt-16 lg:px-14 px-2 text-white'>
        <div className='flex justify-evenly bg-zinc-700 rounded-lg mt-4 h-[50px] items-center'>
            <h1 onClick={()=>setShow("list")} className={` ${show=== 'list' ? '  bg-yellow-600 ' : " hover:border border-yellow-500 "}  cursor-pointer py-3 px-4 rounded-md font-bold `}>List Shoes</h1>
            <h1 onClick={()=>setShow("addShoes")} className={` ${show=== 'addShoes' ? '  bg-yellow-600 ' : " hover:border border-yellow-500 "}  cursor-pointer py-3 px-4 rounded-md font-bold `}>Add Shoes</h1>
            <h1 onClick={()=>setShow("order")} className={` ${show=== 'order' ? '  bg-yellow-600 ' : " hover:border border-yellow-500 "}  cursor-pointer py-3 px-4 rounded-md font-bold `}>Orders</h1>
        </div>

       <ListShoes url={url} show={show}/>
       <AddShoes url={url} show={show}/>
       <Order url={url} show={show}/>
    </div>
  )
}

export default Home
