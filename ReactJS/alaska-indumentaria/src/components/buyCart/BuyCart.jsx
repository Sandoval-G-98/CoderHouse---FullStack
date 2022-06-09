import {getFirestore, collection, addDoc} from "firebase/firestore"
import swal from "sweetalert"


function createOrder(buyer, items){
      let listItemsOrder = []
      let total = 0
      items.forEach( (item) =>{
        let itemOrder = {
          "id": item.id,
          "title": item.name,
          "price": item.price,
          "counter": item.counter
        }
        listItemsOrder.push(itemOrder)
        total+= item.price * item.counter
      })
      
      let order = {
        "buyer": buyer,
        "items": listItemsOrder,
        "total": total
      }

      return order
    }

const storeOrderInFirestore = async (order) => {
  const db = getFirestore()
  const ordersCollection = collection(db, 'orders')
  const {id} = await addDoc(ordersCollection, order)
  swal("Compra concretada. Su numero de orden es  " + id)
}

export function buyCart(buyer, items) {
  let order = createOrder(buyer, items)
  storeOrderInFirestore(order)
  return order
}