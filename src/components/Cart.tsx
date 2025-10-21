import { useEffect, useState } from "react"
import type { BeerType } from "./BeerCard"

export type CartItemType = {
    item: BeerType,
    quantity: number
}

const Cart = (props: { cart: CartItemType[]}) => {
  const [sum, setSum] = useState(0)

  useEffect(()=>{
    let currSum = 0
    props.cart.forEach(beer => currSum += beer.item.price)
    setSum(currSum)
  }, [props])

  return (
    <div>
        {props.cart.length} item in Cart for {sum} Ft!

        <ul>
            {props.cart.map(beer => <li>{beer.item.name}</li>)}
        </ul>
    </div>
  )
}

export default Cart