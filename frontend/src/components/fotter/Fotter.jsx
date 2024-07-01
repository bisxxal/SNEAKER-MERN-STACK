import React from 'react'

function Fotter() {
  return (
    <div className=' gradient w-full max-lg:pb-10 min-h-[70vh] lg:min-h-screen mt-8 text-blac rounded-t-[50px] lg:rounded-t-[100px] flex flex-col justify-center  px-5 lg:px-28  '>

    <div className='flex  lg:flex-row flex-col gap-16 lg:gap-0  lg:justify-between items-center '>
    <div className='w-full  lg:w-1/2 flex flex-col'>
        <h1 className=' snker tracking-widest  lg:tracking-wider text-[100px] text-center lg:text-start'>SNKER</h1>

        <p className='lg:block hidden text-sm w-[75%] mt-6 mb-52'>
        Discover the latest trends and timeless styles in our extensive collection of shoes, <br /> perfect for every occasion. Shop now for unbeatable comfort and quality, crafted to elevate your look.
            </p>

        <div>
        Copyright 2024 SNKER
            Terms of Service
            Privacy Policy
            Conifer Innovations Private Limited
            CIN: U72900KA2022PTC163144
        </div>
    </div>
    <div className='w-full lg:w-1/2 flex lg:justify-end'>


        <div className='flex flex-col gap-3 lg:gap-3'>
       <h2>  Contact SNKER</h2>
       <h2>  sales@getSNKER.ai</h2>
       <h2>  Registered Office:</h2>
       <h2>  1507, Incubex, 11th cross road,<br />19th Main Road Bengaluru, India. 560102</h2>
       <h2>  Corporate Office:</h2>
       <h2>  291, All Time Space, 4th Floor,</h2>
       <h2>  15th A Cross, Sector - 6,</h2>
       <h2>  HSR Layout, Bengaluru,</h2>
       <h2>  India. 560102</h2>
        </div>
    </div>

    </div>
    <div className=' h-16 lg:h-32 text-center flex font-semibold items-end justify-center '>Created by Bishal with ❤️</div>
</div>
  )
}

export default Fotter
