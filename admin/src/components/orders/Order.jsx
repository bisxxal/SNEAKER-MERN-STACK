import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
function Order({show}) {
  const [data, setData] = useState([]);
  const url = 'http://localhost:8000';
  const fetchData = async () => {
    const responce = await axios.post(url + "/api/order/list");

    if(responce.data.success){
      const revdata = responce.data.order
    setData(revdata.reverse())
        // setData(responce.data.order);
    }
    else{
        alert('error!!')
    }
  };
  useEffect(() => {
    fetchData();
  });
  
  
  const statusHandeler = async(e ,orderId)=>{
    const responce = await axios.post(url + "/api/order/updateorder",{
        orderId ,status:e.target.value
    });
    if(responce.data.success){
        await fetchData()
    }
    
  }
  return (
    <div className={` ${show === 'order' ? ' block ':' hidden ' } w-full min-h-screen`}>
    

      <div className=' w-full lg:w-[80%] mt-8 mx-auto'>
        {
           data? data.map((order, index) => (
                <div key={index} className="flex w-full bg-zinc-800 items-start mt-3 gap-2 px-3 py-2 rounded-md">

 
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
                 <div className='flex flex-col lg:flex-row justify-between pt-3 w-full '>
                    <div className='flex flex-col lg:flex-row gap-4 pl-1 lg:pl-0 lg:gap-10'>
                    <p className=' text-blue-500'> &#x2022; {order.status}</p>
                    <p>Total: ₹ {order.amount}</p>
                    </div>
                  
                    <select onChange={(e)=>statusHandeler(e,order._id)} value={order.status} className="bg-zinc-700 rounded-md px-1 mt-6 lg:mt-0 py-1 lg:text-[14px] text-[10px] ">
                <option
                  className="bg-zinc-700 rounded-md lg:text-[14px] text-[10px] "
                  value="Processing Order"
                >
                  Processing
                </option>
                <option
                  className="bg-zinc-700 rounded-md lg:text-[14px] text-[10px] "
                  value="Out For Delivery">
                
                  Out For Delivery
                </option>
                <option
                  className="bg-zinc-700 rounded-md lg:text-[14px] text-[10px] "
                  value="Delivered">
                
                  Delivered
                </option>
              </select>
                  </div>
<p> Payment: {order.payment === true ? 'Success' :'Failed' }</p>
                 <p className=' mt-4 font-semibold'>Items: {order.items.length}</p>
                 </div>
                  
                </div>
              )) : ' You Did Not Have any Order !! '
            } 
 </div>
    </div>
  )
}

export default Order