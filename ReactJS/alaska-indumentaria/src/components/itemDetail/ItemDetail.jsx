import { React, useEffect, useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import "./itemDetail.css"
import { ItemCount } from "../itemCount/ItemCount"
import {Link} from "react-router-dom"

export const ItemDetail = ({clothes, itemId}) => {

  const { addToCart } = useContext(CartContext)

  const [clothe, setClothe] = useState({})
  const [add, setAdd] = useState(false)
  
  const onAdd = () => {
    setAdd(!add)
  }

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
        <div>
          { add ? <div><Link to = "/cart"><button> Terminar mi compra </button></Link></div>
          : <div><ItemCount item = {clothe} addToCart = {addToCart} onAdd = {onAdd}></ItemCount> </div>
          }
        </div>
      </div>
    </div>
  )

}
