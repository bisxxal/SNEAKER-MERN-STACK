import React from 'react'
import { cate } from '../../assets/assets.js';

function ShowCategory({categorie , setCatrgorie}) {
  return (
    <div>
         <div className='w-full flex flex-col lg:py-10 py-6  gap-3 px-4 lg:px-0  lg:border-b-[1px] border-[#ffffff76] '>
        <h1 className='text-[26px] font-semibold'>Explore Our New Collection</h1>

        <p className='text-[12px] font-thin lg:text-[14px] w-full lg:max-w-[70%] text-[#9b9999]'>
        Discover the latest trends and timeless styles in our extensive collection of shoes, <br /> perfect for every occasion. Shop now for unbeatable comfort and quality, crafted to elevate your look.</p>

        <div className='item w-full flex items-center justify-between gap-4 lg:gap-[unset] mt-5 overflow-x-auto  '>
            {cate.map((item, index)=> <div
            onClick={()=>setCatrgorie(prev => prev === item.name  ? "All":item.name)}
            className=' flex-shrink-0  flex flex-col items-center gap-4 max-md:w-[130px] max-md:h-[150px]  h-[200px] w-[180px]  bg-zinc-300 rounded-lg overflow-hidden ' key={index}>
                <img className={` ${categorie === item.name ?" ":''} w-full  overflow-hidden h-[80%] cursor-pointer object-cover object-center `} src={item.image} alt="" />
                <p className={`text-[13px] lg:text-[15px]  ${categorie === item.name ?"text-blue-500 ":''} font-bold text-[#353535] cursor-pointer `}>{item.name}</p>
              </div> )}
        </div>
    </div>
    </div>
  )
}

export default ShowCategory