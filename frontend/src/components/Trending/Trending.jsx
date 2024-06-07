import React from 'react'
import assets from '../../assets/assets.js'

function Trending() {
  return (
    <div className='min-h-[100vh] mt-7 px-4 lg:px-0'>
    <h1 className='text-[30px] font-bold mb-4'>Treanding Now</h1>
    <div className=' flex lg:flex-row flex-col gap-4 h-[100vh] overflow-hidden '>
       
        <div className='lg:w-1/2 w-full lg:h-full  h-1/2 '>
             <img className=' rounded-3xl h-1/2  w-full object-cover' src={assets.trend2} alt="" />
             <img className=' rounded-3xl h-1/2  w-full object-cover mt-3 lg:mt-4' src={assets.trend3} alt="" />
        </div>
        <div  className='lg:w-1/2 w-full overflow-hidden lg:h-full h-1/2'>
            <img className=' rounded-3xl h-full w-full object-cover ' src={assets.trend1} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Trending