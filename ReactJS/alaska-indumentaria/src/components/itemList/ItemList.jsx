import React from 'react'
import {Item} from "../item/Item"
import "./itemList.css"

export const ItemList = ({clothes}) => {
  return (
    <>
      {clothes.map( clothe => <Item item = {clothe}></Item>)}
    </>
  )
}

export default ItemList