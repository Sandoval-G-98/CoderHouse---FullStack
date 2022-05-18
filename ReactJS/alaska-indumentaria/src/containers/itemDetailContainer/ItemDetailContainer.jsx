import { React, useEffect, useState }from 'react'
import {clothesWoman as clothesDataWoman, clothesMan as clothesDataMan} from "../../dataMock/clothes"
import {ItemDetail} from "../../components/itemDetail/ItemDetail"
import {useParams} from "react-router-dom"

const ItemDetailContainer = ({genre}) => {

  const {itemId} = useParams()

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
    <div id = "item-detail-container"> 
        <ItemDetail clothes = {clothes} itemId = {itemId} ></ItemDetail>
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

export default ItemDetailContainer