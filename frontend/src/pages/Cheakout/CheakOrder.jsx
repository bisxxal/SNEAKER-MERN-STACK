import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../components/Context/StoreContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function CheakOrder() {
    const navigate = useNavigate()
    const {list ,gettotolCartItem , cartItems ,url ,token ,discount} = useContext(StoreContext)
    const [data, setData] = useState({
        firstname:'',lastname:'', email:'',city:'',street:'',state:'',zipcode:'',country:'',phone:''
    })

    const onChangeHander = (e)=>{
        const name = e.target.name
        const value = e.target.value

        setData(data=>({...data , [name]:value}))
    }


const placeOrder = async(e)=>{
        e.preventDefault()
        let orderItems = [];
        list.map((item)=>{
            if(cartItems[item._id]>0){
            let itemInfo = item;
            itemInfo["quantity"] = cartItems[item._id]
            orderItems.push(itemInfo)
            }
        })
        let orderData={
        address:data,
        items:orderItems,
        amount:discount()
        }


        try {
            const keydata = await axios.post(`${url}/api/key`)
            const key =  keydata.data.key
            console.log(key);
          let response = await axios.post(`${url}/api/order/createorder`, orderData, {headers: { token } });

          if (response.data && response.data.order) {
              const { id: order_id, amount } = response.data.order;
              const orgOrder = response.data.newOrder._id
              initiateRazorpayPayment(order_id, amount , orgOrder ,key);
          } else {
              console.error('Order creation failed:', response.data);
          }
      } catch (error) {
          console.error('Error placing order:', error);
      } 
    } 
    const initiateRazorpayPayment = (order_id, amount ,orgOrder ,key) => {
      const options = {
          key:key,
          amount: amount,
          currency: "INR",
          name: "Bishal kandi",
          description: "Test Transaction",
          image: "https://instagram.fbbi5-1.fna.fbcdn.net/v/t51.2885-19/446604451_1182371932934498_8952072323975758574_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbbi5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=3fAEoP2ZPW4Q7kNvgHkugv4&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYDW6SY-mIjElL_-d6GyN6Z1oOWEMLz4JwH3VUjCVIpUmw&oe=666666C5&_nc_sid=8b3546",
          order_id: order_id,
          handler: function (response) {
              axios.post(`${url}/api/order/verify`, {
                  order_id: response.razorpay_order_id,
                  payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  orgOrder:orgOrder
              }).then(res => {
                  if (res.data.success) {
                      navigate(`/verify?success=true&orderId=${order_id}`);
                  } else {
                      navigate(`/verify?success=false&orderId=${order_id}`);
                  }
              }).catch(error => {
                  console.error('Error verifying payment:', error);
                  navigate(`/verify?success=false&orderId=${order_id}`);
              });
          },
          prefill: {
              name: `${data.firstname}`,
              email: data.email,
              contact: data.phone
          },
       
          theme: {
              color: "#131313"
          }
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
          
          navigate(`/verify?success=false&orderId=${order_id}`);
      });
      rzp1.open();
  };

  return (
    <div className=' pt-16 lg:px-24  min-h-screen w-full'>
        
        <form onSubmit={placeOrder} className='flex w-full h-screen flex-col lg:flex-row justify-between'>
        <div className='place-order-left flex flex-col lg:justify-center items-center w-full lg:w-1/2'>
          <p className='text-[24px] font-bold mb-5'>Delivery Information</p>
          <div className='multi-filds w-full lg:justify-center items-center flex flex-col lg:flex-row mb-5 gap-5'>
            <input required onChange={onChangeHander}   value={data.firstname} name='firstname' className='w-[80%] lg:w-1/3  bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="text" placeholder='FistName' />
            <input required onChange={onChangeHander}   value={data.lastname} name='lastname' className='w-[80%] lg:w-1/4 bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="text" placeholder='Last Name' />
          </div>
          <input required onChange={onChangeHander} value={data.email} name='email' className='w-[80%] lg:w-[60%] bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="email" placeholder='email adress' />
         <br />
          <input required onChange={onChangeHander}  value={data.street} name='street' className='w-[80%] lg:w-[60%] bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="text" placeholder='Street' />

          <div className='multi-filds lg:justify-center w-full items-center mt-4 flex flex-col lg:flex-row gap-5 mb-5'>
            <input required onChange={onChangeHander}  value={data.city} name='city' className='w-[80%] lg:w-1/3 bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="text" placeholder='City' />
            <input required onChange={onChangeHander}  value={data.state} name='state' className='w-[80%] lg:w-1/4 bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="text" placeholder='State' />
          </div>
          <div className='multi-filds w-full lg:justify-center items-center flex flex-col lg:flex-row gap-5 mb-5'>
            <input required onChange={onChangeHander}  value={data.zipcode} name='zipcode' className='w-[80%] lg:w-1/3 bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="number" placeholder='Zip code' />
            <input required onChange={onChangeHander}  value={data.country} name='country' className='w-[80%] lg:w-1/4 bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="text" placeholder='Country' />
          </div>
          <input required  onChange={onChangeHander}  value={data.phone} name='phone'className=' w-[80%] lg:w-[60%] bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="number" placeholder='Phone' />
        </div>


        <div className='place-order-right w-full lg:w-1/2  flex flex-col justify-center items-center  '> 

        <div className='w-[80%]  px-10 py-10 flex flex-col gap-5 bg-zinc-800 rounded-lg'>
          <h2 className='text-[25px] font-bold'>Cart Total</h2>
          <div className=' flex justify-between w-full border-b pb-3 border-[#ffffff44]'> <h1>SubTotal:</h1> <p> ₹  {gettotolCartItem() > 0 ? gettotolCartItem() : '0'}</p> </div>
          <div className=' flex justify-between w-full border-b pb-3 border-[#ffffff44]'><h1>Delivery Charges:</h1> <p> ₹  {gettotolCartItem() > 0 ? "200" : '0'}</p> </div>
          <div className=' flex justify-between w-full border-b pb-3 border-[#ffffff44] text-lg font-semibold'> <h1>Grand Total</h1> <h1> ₹  {discount()}</h1> </div>
          <button type='sumbit' className=' bg-green-500 py-3 rounded-xl font-semibold text-lg'>PROCEED TO PAYMENT</button>

      </div> 
      </div>
      </form>
    </div>
  )
}

export default CheakOrder