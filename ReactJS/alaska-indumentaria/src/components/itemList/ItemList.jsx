import React from 'react'
import {Item} from "../item/Item"
import "./itemList.css"

export const ItemList = ({clothes, genre}) => {
  return (
      <>
        {clothes.map( clothe => <Item  key={clothe.id} item = {clothe} genre = {genre}></Item>)}
      </>
  )
}

export default ItemList