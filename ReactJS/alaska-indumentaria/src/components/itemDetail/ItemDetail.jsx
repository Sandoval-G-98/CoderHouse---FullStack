import {getDocs, getFirestore, where, collection, query} from "firebase/firestore"
import { React, useEffect, useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ItemCount } from "../itemCount/ItemCount"
import {Link} from "react-router-dom"
import "./itemDetail.css"

export const ItemDetail = ({clothe}) => {

  const { addToCart } = useContext(CartContext)

  const [add, setAdd] = useState(false)
  
  const onAdd = () => {
    setAdd(!add)
  }

  return (
    <div id = "item-detail">
      <img src = {clothe.imageUrl} alt = {clothe.id} width = "250" height = "250"></img>
      <div id = "detail-description"> 
        <p id = "title"> {clothe.title} </p>
        <p id = "price"> ${clothe.price} </p>
        <p id = "stock"> Stock {clothe.stock}</p>
        <div>
          { add ? <div><Link to = "/cart"><button> Terminar mi compra </button></Link></div>
          : <div><ItemCount item = {clothe} addToCart = {addToCart} onAdd = {onAdd} stock = {clothe.stock}></ItemCount> </div>
          }
        </div>
      </div>
    </div>
  )

}
