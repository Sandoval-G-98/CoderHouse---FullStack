import { React, useEffect, useState }from 'react'
import {ItemDetail} from "../../components/itemDetail/ItemDetail"
import {useParams} from "react-router-dom"
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

const ItemDetailContainer = ({genre}) => {

  const {itemId} = useParams()
  const [clothe, setItem] = useState({})

  const getItem = () => {
    const db = getFirestore();
    const alaskaProducts = query(collection(db, "items"), where("genre", "==", genre), where("id", "==", parseInt(itemId)))
    getDocs(alaskaProducts).then (snapshot => {
      if(snapshot.size > 0){
        const clothesData = snapshot.docs.map( d => ({'id': d.id, ...d.data()}))
        setItem(clothesData[0])
      }
    })
  }
  
  useEffect(() => {
    getItem()
  }, [])

  return (
    <div id = "item-detail-container"> 
        <ItemDetail clothe = {clothe} key = {clothe.id}></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer