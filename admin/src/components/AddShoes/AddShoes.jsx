import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { MdOutlineFileUpload } from "react-icons/md";
function AddShoes({show}) {

  const url  = 'http://localhost:8000'
  const [image , setImage] = useState(false)
  const [add , setAdd] = useState('')
  
   const [data , setData] = useState({
    name:'',
    description:'',
    price:"",
    category:'',
    size:''
    
   })
   const onChangeHandeler = (e)=>{
      const name = e.target.name;
      const value = e.target.value
      setData( data => ({...data , [name]:value}))
   }
   const onSumbitHandler = async(e)=>{
      e.preventDefault()
    const formData = new FormData();
    formData.append("name" , data.name)
    formData.append("price" , Number(data.price))
    formData.append("size" , Number(data.size))
    formData.append("description" , data.description)
    formData.append("category" , data.category)
    formData.append("image" , image)

    const responce = await axios.post(`${url}/api/shoes/createorder` ,formData )

    if(responce.data){
      setAdd(responce.data.message)
    }
   

   }
  return (
    <div className={` ${show === 'addShoes' ? ' block ':' hidden ' }  w-full min-h-screen my-7 pb-5`}>
      <h1 className=' mb-5 text-3xl font-semibold text-center'> Add product Here</h1>
       <h1 className='font-semibold text-xl mb-4 text-center text-green-500'> 
       {
          add ? add:''
        }</h1>
        <form onSubmit={onSumbitHandler} className='flex flex-col gap-3 w-full justify-center  ' >


     <div className=' flex lg:flex-row flex-col w-full gap-5 '>
  <div className='add-prodect name w-full lg:w-1/2 bg-[#121212a9] rounded-md px-4 py-2 '>
            <p className='text-[18px] mb-3'>Product name</p>
            <input onChange={onChangeHandeler} value={data.name} className='px-3 py-1 rounded-md bg-transparent border border-[#ffffff4f] outline-none w-1/2 ' type="text" name='name' placeholder='Type here'/>
        
            <div className='des flex-col mt-4 fle'>
            <p className='text-[18px] mb-3'>Product Description</p>
            <textarea required onChange={onChangeHandeler} value={data.description}  name="description" rows='6' placeholder='Write content here' className='px-3 py-1 w-full lg:w-full rounded-md bg-zinc-800  border border-[#ffffff4f] outline-none resize-none'></textarea>
            </div>
        </div>



     <div className='upload  w-full lg:w-1/2 flex flex-col  items-center'>
            <p className='text-[18px] mb-3'>Upload images</p>
            <label htmlFor="image">
              <div className='relative w-[90vw] lg:w-[400px] bg-zinc-600 rounded-lg flex items-center justify-center h-[260px]'>

                { image ?  <img className='  rounded-md  w-full h-full object-contain  ' src={ image ? URL.createObjectURL(image) :''} alt="" />  : <MdOutlineFileUpload className='text-center text-[50px]' />}
            <input required onChange={(e)=>setImage(e.target.files[0])} className=' opacity-0 px-3 py-1 w-full  h-full rounded-md bg-transparent border border-[#ffffff4f] outline-none  absolute'    type="file"   />
              </div>
               
            </label>
        </div>
      
     </div>


        <div className="price  bg-[#121212a9] px-3 py-3 rounded-md">
            <div className="category">
                <p className='text-[18px] mb-3'>Product Category</p>
                <select required onChange={onChangeHandeler} className=' bg-transparent mb-4 px-7 py-2 border rounded-lg border-[#ffffff50]'   name="category" >
                    <option className=' bg-[gray] text-black pr-10' value="Sneaker">Sneaker</option>
                    <option className=' bg-[gray] text-black pr-10' value="Boots">Boots</option>
                    <option className=' bg-[gray] text-black pr-10' value="Basketball">Basketball shoes</option>
                    <option className=' bg-[gray] text-black pr-10' value="High-top">High-Top</option>
                    <option className=' bg-[gray] text-black pr-10' value="Sport">Sport Shoes</option>
                    <option className=' bg-[gray] text-black pr-10' value="chelsa">chelsa </option>
                    <option className=' bg-[gray] text-black pr-10' value="Casual">Casual </option>
                </select>
            </div>
            <div className="addprice">
                <p className='text-[18px] mb-3'>Shoes Size</p>
               
                <select required onChange={onChangeHandeler} className=' bg-transparent mb-4 px-4 py-2 border rounded-lg border-[#ffffff50]'   name="size" >
                    <option className=' bg-[gray] text-black pr-10' value="7">7</option>
                    <option className=' bg-[gray] text-black pr-10' value="8">8</option>
                    <option className=' bg-[gray] text-black pr-10' value="9">9</option>
                    <option className=' bg-[gray] text-black pr-10' value="10">10</option>
                    <option className=' bg-[gray] text-black pr-10' value="11">11</option> 
                </select>


                <p className='text-[18px] mb-3'>Product Price</p>
                <input required onChange={onChangeHandeler} value={data.price}  className='px-3 py-1 rounded-md bg-transparent border border-[#ffffff4f] outline-none ' name='price' placeholder='₹2000' type="Number" />
            </div>


        </div>

<button type='sumbit' className='bg-blue-500 w-[130px] py-2 rounded-full text-[18px] mt-4 font-bold mx-auto'>Add</button>
      </form>
    </div>
  )
}

export default AddShoes