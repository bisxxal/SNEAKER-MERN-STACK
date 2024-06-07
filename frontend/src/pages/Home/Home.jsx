import React from 'react'
import Hero from '../../components/Hero/Hero'
import NewArival from '../../components/Newarival/NewArival'
import Trending from '../../components/Trending/Trending'
import ViewAllCateGory from '../../components/ViewAllCate/ViewAllCateGory'
import AddToCArt from '../../components/addTocart/AddToCArt'

function Home() {
  return (
    <div className='pt-20 lg:px-16'>
      <Hero/>
      <NewArival/> 

      <Trending/>
      <ViewAllCateGory/>
    </div>
  )
}

export default Home