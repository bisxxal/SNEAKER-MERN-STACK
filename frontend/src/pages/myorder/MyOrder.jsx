import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../components/Context/StoreContext'
import axios from 'axios'
function MyOrder() {
    const [data,setData] = useState([])
    const {url,token} = useContext(StoreContext) 
    
    const fetchData = async ()=>{
    const responce = await axios.post(url+"/api/order/userorder" ,{},{headers:{token}} )
    const revdata = responce.data.order
    setData(revdata.reverse())
    }
    useEffect(()=>{
        if(token){
            fetchData()
            // console.log(data);
        } 
        
    })
  return (
    <div className='w-full min-h-screen pt-24 px-2 lg:px-24'>
        <h1 className='text-3xl font-semibold '>My Orders .</h1>
        <div className=' w-full lg:w-[80%] mt-8 mx-auto'>
        {
           data? data.map((order, index) => (
                <div key={index} className="flex w-full bg-zinc-800 mt-3 gap-2 px-3 py-2 rounded-md">

 
                    <div className="w-1/4 flex flex-col items-center gap-2 justify-center">
                {
                order.items.map((item, idx) => (
                  <img className='w-full object-contain bg-white rounded-md h-[120px] lg:h-[110px]' src={url+'/images/'+item.image} alt="" />
                ))
            }
            </div>
                 
        
                  <div className="flex  lg:w-[30%] flex-col gap-1">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col px-4 py-2 rounded-md bg-[#0000006e] gap-1">
                        <p className=" font-thin text-[12px] ">{item.description}</p>
                        <h1 className="text-gray-500">{item.name}</h1>
                        <p className="font-semibold">₹ {item.price}</p>
                        <h1 className='text-sm'>Qty: {item.quantity}</h1>
                        <div className="flex mt-2 pr-20 w-full justify-between items-center">
                        </div>
                      </div>
                    ))}
                  </div>
                  
                 <div className=' flex flex-col lg:w-[40%] mx-auto '>
                 <div className='flex flex-col lg:flex-row justify-between py-10 w-full '>
                    <div className='flex flex-col lg:flex-row gap-4 pl-1 lg:pl-0 lg:gap-10'>
                    <p className='text-green-500'> &#x2022; {order.status}</p>
                    <p className=' text- font-semibold'>Total: ₹ {order.amount}</p>
                    </div>
                  
                    <button onClick={fetchData} className="px-4 py-1 mt-8 lg:mt-0 lg:h-[30px] text-[12px] bg-red-600 rounded-md">Track Order</button>
                  </div>
                  <div>
                  <p> Payment: {order.payment === true ? 'Success' :'Failed' }</p>
                  <p className='mt-3'>Items: {order.items.length}</p>
                  </div>
                 </div>
                  
                </div>
              )) : ' You Did Not Have any Order !! '
            } 
 </div>


      
    </div>
  )
}

export default MyOrder