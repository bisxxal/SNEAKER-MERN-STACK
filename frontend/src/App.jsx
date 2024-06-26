import { useContext, useState } from 'react' 
import './App.css'
import LocomotiveScroll from 'locomotive-scroll';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Category from './pages/Category/Category'
import SignIn from './pages/SignPopUp/SignIn'
import CheakOrder from './pages/Cheakout/CheakOrder'
import Verify from './components/verify/Verify'
import MyOrder from './pages/myorder/MyOrder'
import Fotter from './components/fotter/Fotter' 
import About from './pages/about/About'
import { StoreContext } from './components/Context/StoreContext';


function App() {
  
  const {token} = useContext(StoreContext)
const locomotiveScroll = new LocomotiveScroll();
const navigate = useNavigate()
   return (
    <>
    <div className='bg-zinc-900 w-full min-h-screen text-white'>
   
<Navbar/>
    <Routes>
      <Route path='/' element={ <Home/>} /> 
      {
        token ? <Route path='/cart' element={ <Cart/> }/>: ''
      }
     
      <Route path='/category' element={ <Category/> }/>
      <Route path='/login' element={ <SignIn/> }/>
      <Route path='/cheakout' element={ <CheakOrder/> }/>
      <Route path='/verify' element={ <Verify /> }/>
      <Route path='/myorder' element={ <MyOrder /> }/>
      <Route path='/about' element={ <About /> }/>
    </Routes>
    
<Fotter/>
    </div>
    </>
  )
}

export default App
