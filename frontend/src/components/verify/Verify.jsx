import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import { Link, useSearchParams } from 'react-router-dom'
import ani from '../../assets/ani.gif'
import err from '../../assets/err.gif'
function Verify() {
  const {url} = useContext(StoreContext)
  const [searchParmas , setSearchParmas] = useSearchParams()

  const success = searchParmas.get("success")

 if(success){

 }
 else{

 }
  
  return (
    <div className=' w-full min-h-screen flex items-center justify-center flex-col'>
      {/* <div className='min-h-screen grid items-center justify-center'>
        <div className="spinner w-[100px] h-[100px] place-self-center border-[3px] rounded-full border-t-[blue] animate-spin"></div>
    </div> */}
      {
        success ?  <img src={ani} alt="" /> : <img src={err} alt="" />
      }
     <Link to={'/myorder'} className='bg-zinc-950 px-4 py-2 rounded-lg font-medium text-lg'>
      Go to MyOrder
     </Link>
    </div>
  )
}

export default Verify