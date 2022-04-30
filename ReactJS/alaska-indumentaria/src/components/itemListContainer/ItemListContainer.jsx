import {React, useState, useEffect} from 'react'
import "./itemListContainer.css"
import {clothes as clothesData} from "../../dataMock/clothes"
import {ItemList} from "../itemList/ItemList"

const ItemListContainer = () => {

  const [clothes, setItem] = useState([])

  useEffect(() => {
    const getItems = new Promise((resolve, reject) =>{
      resolve(clothesData)
      setTimeout(() =>{
      }, 2000)
    })

    getItems.then((result)=>{
      console.log("Se completo la peticion", result)
      setItem(result)
    })

    console.log("Terminó")

  }, [])

  return (
    <div id = "item-list-container">
      <ItemList clothes = {clothes}></ItemList>
    </div>
  )
}

export default ItemListContainer