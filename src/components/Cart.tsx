import { useContext, useEffect, useState } from "react"
import type { BeerType } from "./BeerCard"
import { CartContext } from "../context/CartContextProvider"
export type CartItemType = {
    item: BeerType,
    quantity: number
}

const Cart = () => {
  const [sum, setSum] = useState(0)
  const { cart } = useContext(CartContext)

  useEffect(()=>{
    let currSum = 0
    cart.forEach(beer => currSum += beer.item.price * beer.quantity)
    setSum(currSum)
  }, [cart])

  return (
    <div>
        {cart.length} item in Cart for {sum} Ft!
        <ul>
            {cart.map(beer => <li>{beer.item.name} - {beer.quantity}</li>)}
        </ul>
    </div>
  )
}

export default Cart