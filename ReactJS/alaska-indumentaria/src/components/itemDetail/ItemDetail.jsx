import { React, useEffect, useState } from 'react'
import "./itemDetail.css"

export const ItemDetail = ({clothes, itemId}) => {

  const [clothe, setClothe] = useState({})
  
  useEffect( () =>{
    
    const getItem = () => {
      return new Promise ((resolve) => {
        setTimeout(() => {
          resolve( clothes.find( clothe => clothe.id == itemId))
        }, 2000)
      })
    }

    (async () => {
      const itemData = await getItem()
      if (itemData) {
        setClothe(itemData)
      }
    })()
  }, [clothes, itemId])
  


  return (
    <div id = "item-detail">
      <img src = {clothe.imageUrl} alt = {clothe.id} width = "250" height = "250"></img>
      <div id = "detail-description"> 
        <p id = "title"> {clothe.title} </p>
        <p id = "price"> ${clothe.price} </p>
        <button> Agregar a carrito </button>
      </div>
    </div>
  )

}
