import React, { useState } from 'react'
import ShowCategory from '../../components/showCateory/ShowCategory'
import DisplayShoes from '../../components/DisplayShoes/DisplayShoes'

function Category() {
  const [categorie , setCatrgorie] = useState("All")
  return (
    <div className=' pt-16 lg:px-14'>
        <ShowCategory categorie={categorie} setCatrgorie = {setCatrgorie}/>
        <DisplayShoes   categorie={categorie}/>
    </div>
  )
}

export default Category