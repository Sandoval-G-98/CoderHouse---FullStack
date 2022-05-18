import {useContext, React} from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {

  const { clothes } = useContext(CartContext)

  return (
    <div>Cart</div>
  )
}