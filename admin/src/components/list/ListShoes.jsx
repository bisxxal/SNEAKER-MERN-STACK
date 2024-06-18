import React, { useEffect, useState } from "react"; 
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";
function ListShoes({ show,url }) {

   
  const [list, setList] = useState([]);
  const [add , setAdd] = useState('')

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/api/shoes/list`);
 
      if (response.data.success) {
        setList(response.data.allShoes); 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const removeShoes = async (id) => {
     
      const response = await axios.post(`${url}/api/shoes/remove`,{id});
      if (response.data) {
        setAdd(response.data.message); 
      }
     fetchData()
  };

  useEffect(() => { 
    fetchData();  
  }, []);
  return (
    <div
      className={` ${
        show === "list" ? " block " : " hidden "
      }w-full min-h-screen`}
    >
      <p className="text-center text-[30px] mb-4 font-bold">All Shoes List</p>
      <h1 className='font-semibold text-xl mb-4 text-center text-green-500'> 
       {
          add ? add:''
        }</h1>

      <div className="list-taable">
        <div className="list-formart flex items-center justify-between pr-8 gap-2 px-4 py-3 text-[15px] ">
          <b>Image</b>
          <b className=" hidden lg:block">Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        
        {
          list.map((item,index)=>{
            return(
              <div
              className="flex justify-between gap-2 px-4 py-3 text-[15px] bg-zinc-800 pr-10 items-center mb-3 rounded-lg " key={index} >
              <img
                className="w-[50px] h-[50px] object-cover rounded-sm  "
                src={`${url}/images/` + item.image} 
                alt=""
              />
              <p className=" hidden lg:block">{item.name}</p>
              
              <p>{item.category}</p>
              <p>₹ {item.price}</p>
              <RxCrossCircled
                onClick={() => removeShoes(item._id)}
                className="text-[25px] cursor-pointer hover:text-red-500"
              />
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default ListShoes;
