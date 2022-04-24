import React from 'react'
import "./itemListContainer.css"

const ItemListContainer = ({greeting}) => {
  return (
    <div id = "item-list-container">
      <p>Hola {greeting}</p>
    </div>
  )
}

export default ItemListContainer