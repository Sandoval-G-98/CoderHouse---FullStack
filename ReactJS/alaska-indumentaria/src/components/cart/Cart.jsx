import {useContext, React} from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from "react-router-dom"
import {ItemCart} from "../itemCart/ItemCart"
import "./cart.css"

export const Cart = () => {

  const { items, clear } = useContext(CartContext)

  return (
    <div>

      {items.length == 0 ?
        <div id = "empty-cart">
          <h2> No hay productos en el carrito </h2>
          <div>
            <Link to = "/man"> <button> Ir a galeria de hombres </button></Link>
            <Link to = "/woman"> <button> Ir a galeria de mujeres </button></Link>
          </div>
        </div>
        :
        <div id = "not-empty-cart">
          <div id = "cart-items">
            {items.map( item => <ItemCart  item = {item} key = {item.id}></ItemCart>)}
          </div>
          <div id = "total-cart">
            Total del carrito: ${items.reduce((acum, item) => acum + (item.price*item.counter), 0)}
          </div>
          <div id = "clear-cart">
            <button onClick={clear}> Limpiar carrito </button>
          </div>
        </div>
      }

    </div>
  )
}