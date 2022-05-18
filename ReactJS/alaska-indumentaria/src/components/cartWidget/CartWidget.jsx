import {React, useContext} from 'react'
import "./CartWidget.css"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CartContext } from '../context/CartContext'
import {BsFillCartFill} from "react-icons/bs"

const CartWidget = () => {

  const { items } = useContext(CartContext)

  return (
    <div id = "cart-widget">
      { items.length == 0 ? 
        <div> <AiOutlineShoppingCart/></div>
        :
        <div>
          <BsFillCartFill/>
          {items.reduce((acum, item) => acum + item.counter, 0)}
        </div>
      }
    </div>
  )
}

export default CartWidget