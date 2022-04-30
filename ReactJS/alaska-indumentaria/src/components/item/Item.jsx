import React from 'react'
import "./item.css"

export const Item = ({item}) => {
  return (
    <div id="card-item">
      <img src = {item.imageUrl} alt = {item.name} width = "250" height = "250"/>
      <h4><b> {item.title}</b></h4>
      <p> Precio: {item.price}</p>
    </div>
  )
}
