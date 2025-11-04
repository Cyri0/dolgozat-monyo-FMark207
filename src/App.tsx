import BeerCard, { type BeerType } from "./components/BeerCard"
import { useEffect, useState } from "react"
import Cart from "./components/Cart"
import CartContextProvider from "./context/CartContextProvider"

const App = () => {
  const [beers, setBeers] = useState<BeerType[]>([])

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setBeers(data))
  }, [])

  return (
    <>
    <CartContextProvider>
      <Cart/>
      <div className="beerCardWrapper">
        {beers.map(curr => <BeerCard beer={curr} />)}
      </div>
    </CartContextProvider>
    </>
  )
}

export default App