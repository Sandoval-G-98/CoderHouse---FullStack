import { Children, createContext, useState } from 'react'

export const CartContext = createContext({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clear: () => {},
})

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([])

    const addToCart = ( item, counter ) =>{
        if (isInCart(item.id)){
            setItems(items.map((prod) => {
                
                if( prod.id == item.id) {
                    prod.counter += counter
                    prod.totalPrice += prod.price * counter
                }
                return prod
            }))
        }
        else{
            setItems([
                ...items,
                {
                    id: item.id,
                    name: item.title,
                    price: item.price,
                    image: item.imageUrl,
                    counter: counter,
                    totalPrice: item.price * counter
                }
            ])
        }
    }

    const isInCart = (itemId) => {
        return items.find((clothe) => clothe.id == itemId)
    }

    const removeFromCart = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const clear = () => {
        setItems ([])
    }


    const context = {
        items,
        addToCart,
        removeFromCart,
        clear,
    }

    return (
        <CartContext.Provider value = { context }>
            {children}
        </CartContext.Provider>
    )
}