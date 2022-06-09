import {useContext, React, useRef} from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from "react-router-dom"
import {ItemCart} from "../itemCart/ItemCart"
import {buyCart} from "../buyCart/BuyCart"
import {collection, getDocs, getFirestore, query, where, updateDoc, doc} from "firebase/firestore"
import swal from 'sweetalert'
import "./cart.css"

export const Cart = () => {
  const { items, clear } = useContext(CartContext)

  let buyerName = useRef(null)
  let buyerPhone = useRef(null)
  let buyerEmail = useRef(null)

  const updateDocItems = (order) =>{
    const db = getFirestore();
    order.items.forEach((item) =>{
      const alaskaProducts = query(collection(db, "items"), where("id", "==", item.id))
      getDocs(alaskaProducts).then (snapshot => {
        let docId = snapshot.docs[0].id
        let oldStock = Number.parseInt(snapshot.docs[0]._document.data.value.mapValue.fields.stock.integerValue, 10)
        let newStock = oldStock - item.counter
        console.log(newStock)
        updateDoc(doc(db, 'items', docId), {'stock': newStock})
      })
    })
  }

  const checkForm = () => {
    if(buyerName.current.value && buyerPhone.current.value && buyerEmail.current.value)
      return true
    return false
  }
  
  const validateBuyAndComplete = () => {
    if (checkForm()){
      const buyer = {
        "name": buyerName.current.value,
        "phone": buyerPhone.current.value,
        "email": buyerEmail.current.value
      }
      let order = buyCart(buyer, items)
      updateDocItems(order)
      clear()
    } else {
      swal("Los campos Nombre, Numero de telefono y Correo electronico deben completarse para proceder con la compra")
    }
  }
  
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
          <div id = "buy-cart">
            <h3> Para comprar el carrito, se deben llenar los siguientes datos</h3>
            <label> Nombre </label>
            <input type = "text" ref = {buyerName} ></input>
            <label> Numero de telefono </label>
            <input type = "text" ref = {buyerPhone}></input>
            <label> Correo electronico </label>
            <input type = "text"ref = {buyerEmail}></input>
            <button onClick={() => {validateBuyAndComplete()}}> Comprar carrito </button>
          </div>
        </div>
      }

    </div>
  )
}