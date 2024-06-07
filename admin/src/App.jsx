import { useState } from 'react' 
import './App.css'
import Naavbar from './components/Navbar/Naavbar'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Naavbar/>
     <Home/>
    </>
  )
}

export default App
