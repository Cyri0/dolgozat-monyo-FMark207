import BeerCard, { type BeerType } from "./components/BeerCard"
import { useEffect, useState } from "react"
import Cart, { type CartItemType } from "./components/Cart"

const App = () => {

  const [beers, setBeers] = useState<BeerType[]>([])

  const [cart, setCart] = useState<CartItemType[]>([])

  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data => setBeers(data))
  }, [])

  const addToCart = (beer: BeerType) => {
    let includes = false
    cart.forEach(element => {
      if(element.item.name === beer.name) includes = true  
    })

    if(!includes){
      setCart(prev => [...prev, {item: beer, quantity: 1}])

      // TODO szünet után
    }
  }

  return (
    <>
      <Cart cart={cart} />
      <div className="beerCardWrapper">
        {beers.map(curr => <BeerCard beer={curr} addToCart={addToCart} />)}
      </div>
    </>
  )
}

export default App