import { createContext, useState } from "react"
import type { CartItemType } from "../components/Cart"
import type { BeerType } from "../components/BeerCard"

export const CartContext = createContext<{
    cart: CartItemType[],
    addToCart: (beer: BeerType) => void
}>({ cart: [], addToCart: () => { } })

const CartContextProvider = (props: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItemType[]>([])

    const addToCart = (beer: BeerType) => {
        let includes = false
        cart.forEach(element => {
            if (element.item.name === beer.name) includes = true
        })

        if (!includes) {
            setCart(prev => [...prev, { item: beer, quantity: 1 }])
        }else{
            setCart(prev => prev.map(cartItem => 
                cartItem.item.name === beer.name ? 
                {...cartItem, quantity: cartItem.quantity + 1} : 
                cartItem ))
        }
    }

    return (
        <CartContext.Provider value={{ cart: cart, addToCart: addToCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider