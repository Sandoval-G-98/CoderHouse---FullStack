import {React, useState, useEffect} from 'react'
import "./itemListContainer.css"
import {clothesWoman as clothesDataWoman, clothesMan as clothesDataMan} from "../../dataMock/clothes"
import {ItemList} from "../../components/itemList/ItemList"

const ItemListContainer = ({genre}) => {

  let dataClothes = getDataClothes(genre)

  const [clothes, setItem] = useState([])

  useEffect(() => {
    const getItems = new Promise((resolve, reject) =>{
      resolve(dataClothes)
      setTimeout(() =>{
      }, 2000)
    })

    getItems.then((result)=>{
      setItem(result)
    })

  }, [dataClothes])

  return ( 
    <div id = "item-list-container">
      <ItemList clothes = {clothes} genre = {genre}></ItemList>
    </div>
  )
}

function getDataClothes(genre) {
  switch (genre){
    case "man":
      return clothesDataMan
    case "woman":
      return clothesDataWoman
    default:
      return null
  }
}

export default ItemListContainer