import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext()

const StoreContextProvider = (props)=>{
  const [showlogin , setShowlogin] = useState(false)
  const [token , setToken] = useState('')
  const [list, setList] = useState([]); 
    const [cartItems, setItems] = useState({});
    const url = `https://snkerbackend.onrender.com`

    
  const [dis , setDis] = useState()
  
  const discount = () => {
    let totalAmount = gettotolCartItem()+200;
    if (dis === "NEW20") {
     Math.floor( totalAmount *= 0.8); 
    }
    return totalAmount.toFixed(2);
};


    const addToCart = async(itemId)=>{

      if(!cartItems[itemId]){
        setItems((prev)=>({...prev ,[itemId]:1}))
      }
      else{
        setItems((prev) => ({ ...prev, [itemId]:prev[itemId] + 1 }));
      }
      if(token){
        await axios.post(url+"/api/cart/createorder",{itemId},{headers:{token}})
      }
    }  
    const removeFromCart = async(itemId)=>{
     
        setItems((prev)=>({...prev , [itemId]:prev[itemId]-1}))
        if(token){
          await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
     }

     const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/api/shoes/list`);
   
        if (response.data) {
          setList(response.data.allShoes); 
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const gettotolCartItem = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
          if (cartItems[item] > 0) {
              let itemInfo = list.find((product) => product._id === item);
              if (itemInfo) {
                  totalAmount += itemInfo.price * cartItems[item];
              }
          }
      }
      return totalAmount;
  }
   
     const loadCartData = async(token)=>{
      const responce = await axios.post(url+"/api/cart/getcart",{},{headers:{token}})
      setItems(responce.data.cartData)
    
    }
     useEffect(()=>{

      const getList = async ()=>{
        await fetchData() 
        gettotolCartItem()
        if(localStorage.getItem("token"))
        {
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem('token'))
      }
      }
      getList()
    },[])

    const contextValue = {
        url ,cartItems ,setItems , addToCart , removeFromCart,showlogin , setShowlogin,token , setToken
    ,list, setList,fetchData,gettotolCartItem,discount,setDis
      };
    
      return (
        <StoreContext.Provider value={contextValue}>
          {props.children}
        </StoreContext.Provider>
      );
}

export default StoreContextProvider