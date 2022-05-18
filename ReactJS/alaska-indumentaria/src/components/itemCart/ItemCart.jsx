import {React, useContext} from 'react'
import {CartContext} from '../context/CartContext'
import './itemCart.css'

export const ItemCart = ({item}) => {

    const {removeFromCart} = useContext(CartContext)

    return (
        <>
            <div id = "item-cart">
                <img src = {item.image} alt = "" height = "250" width = "250"></img>
                <div>id: {item.id}</div>
                <div>tipo: {item.name}</div>
                <div>cantidad: {item.counter}</div>
                <div>precio: ${item.price}</div>
                <div> Subtotal: {item.price} * {item.counter} = ${item.price * item.counter}</div>
                <button onClick={() => removeFromCart(item.id)}>Eliminar de carrito</button>
            </div>
        </>
  )
}