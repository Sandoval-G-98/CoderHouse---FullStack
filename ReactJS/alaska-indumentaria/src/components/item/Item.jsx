import React from 'react'
import "./item.css"
import {Link} from "react-router-dom"

export const Item = ({item, genre}) => {
  let itemId = item.id
  let url = "/"+genre+"/"+itemId

  return (
    <div id="card-item">
      <img src = {item.imageUrl} alt = {item.name} width = "250" height = "250"/>
      <h4><b> {item.title}</b></h4>
      <p> Precio: {item.price}</p>
      <Link to = {url}> <button> Ver detalle </button> </Link>
    </div>
  )
}

