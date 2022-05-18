import {React, useState, useEffect} from 'react'
import {ItemList} from "../../components/itemList/ItemList"
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import "./itemListContainer.css"

const ItemListContainer = ({genre}) => {

  const [clothes, setItem] = useState([])
  const getItems = () => {
    const db = getFirestore();
    const alaskaProducts = query(collection(db, "items"), where("genre", "==", genre))
    getDocs(alaskaProducts).then (snapshot => {
      if(snapshot.size > 0){
        const clothesData = snapshot.docs.map( d => ({'id': d.id, ...d.data()}))
        setItem(clothesData)
      }
    })
  }
  
  useEffect(() => {
    getItems()
  }, [getItems])

  return (
    <div id = "item-list-container">
      <ItemList clothes = {clothes} genre = {genre}></ItemList>
    </div>
  )
}

export default ItemListContainer