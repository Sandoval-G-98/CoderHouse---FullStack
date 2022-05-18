import { React, useState } from 'react'
import "./itemCount.css"

export const ItemCount = ( {item, addToCart, onAdd, stock} ) => {
    
    const [counter, setCounter] = useState(1)

    const incrementCounter = () => {
        if (counter < stock)
            setCounter(counter+1)
    }

    const decrementCounter = () => {
        if (counter > 1)
            setCounter(counter-1)
    }

    return (
        <div id = "cart-decision">
            <div id = "item-counter">
                <div>
                    <button onClick = {incrementCounter}> + </button>
                </div>
                <div>
                    <span> {counter} </span>
                </div>
                <div>
                    <button onClick = {decrementCounter}> - </button>
                </div>
            </div>
            <button onClick = {() => {addToCart(item, counter); onAdd(true)}}> Agregar a carrito </button>
        </div>
    )
}
