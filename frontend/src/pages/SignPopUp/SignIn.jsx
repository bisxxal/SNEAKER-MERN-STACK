import React, { useContext, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { StoreContext } from '../../components/Context/StoreContext'

function SignIn() {
    const navigate = useNavigate()
    const {url,showlogin , setShowlogin,token , setToken } = useContext(StoreContext)
    const [currState , setCurrState] =useState("Login")
    const [msg ,setMsg ] = useState('')
    const [data  , setData] = useState({
      name:'',
      password:"",
      email:'',
    })
    
    const onChangeHandeler = (e)=>{
        const name = e.target.name;
        const value = e.target.value

        setData(data => ({...data , [name]:value}))
    }
    console.log(msg);
    const onLogin = async (e)=>{
        e.preventDefault();

        if(currState === 'Login'){
           const responce  = await axios.post(`${url}/api/user/login`  , data)
           setToken(responce.data.token);
          
           if(responce.data){
            setMsg(responce.data.message)
           }
           localStorage.setItem("token",responce.data.token)
           if(token){
            navigate("/")
           }
        }
        else{
            const responce  = await axios.post(`${url}/api/user/register`,data) 
            setToken(responce.data.token);
            if(responce.data){
                setMsg(responce.data.message)
               }
            localStorage.setItem("token",responce.data.token)
            if(token){
                navigate("/")
            }
        }

    }

  return (
    <div className='text-white top-0  bg-contain bg-center  bg-no-repeat bg-[url(https://clipart-library.com/2023/nike-sneaker-clipart-xl.png)]  absolute z-[11] w-full min-h-screen bg-[black] flex-col flex items-center justify-center  '>
        <form onSubmit={onLogin} className=' backdrop-blur-[20px] bg-[#0000007f] w-[350px] rounded-lg gap-4 py-6 px-3 flex-col flex items-center justify-center '>
            <div className='w-full flex  justify-center relative'>
                <h2 className='text-bold text-3xl'>{currState}</h2>
                    <RxCross1 onClick={()=> navigate('/')} className=' cursor-pointer absolute right-6 text-white text-[30px]' />
            </div>
            <div className='inputs flex flex-col gap-3'>
                {currState === 'Login' ? <></> : <input onChange={onChangeHandeler} name='name' value={data.name} className='px-2 rounded py-1 outline-none bg-transparent border border-[#ffffff65]' type="text" placeholder='Username'/>}
               
                <input onChange={onChangeHandeler} name='email' value={data.email} className='px-2 rounded py-1 outline-none bg-transparent border border-[#ffffff65]' type="email" placeholder='email'/>
                <input onChange={onChangeHandeler} name='password' value={data.password} className='px-2 rounded py-1 outline-none bg-transparent border border-[#ffffff65]' type="password" placeholder='password'/>
            </div>
            {
                msg?<p className=' text-red-600 '>{msg}</p>:''
            }
            <button type='sumbit' className=' bg-blue-500   font-bold px-7 py-2 rounded-full '>{currState === 'Sign UP'?'Create account' :'Login' }</button>
            
             {currState === "Login"

             ? <p className='text-[17px]  text-center '>Create a new  account ? <Link className=' text-blue-500' onClick={()=> {setCurrState("Sign UP");  setMsg('')}}>Click here</Link> </p>
             : <p className='text-[17px]  text-center '>Already have an account ? <Link  className=' text-blue-500'onClick={()=> {setCurrState("Login"); setMsg('')}}>Click here</Link> </p>
             }
          
           
        </form>
    </div>
  )
}

export default SignIn