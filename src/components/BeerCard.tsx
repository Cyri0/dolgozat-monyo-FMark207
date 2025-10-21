export type BeerType = {
    image:string,
    name: string,
    abv: string,
    volume: string,
    price: number,
    available: boolean
}

const BeerCard = (props:{beer: BeerType, addToCart: (b: BeerType)=>void}) => {

  return (
    <div className='beerCard'>

      <img src={props.beer.image} alt=""/>
      <strong>{props.beer.name} {props.beer.abv} {props.beer.volume}</strong>
      <p>{props.beer.price} Ft</p>
      <strong className={props.beer.available ? "available" : "notAvailable"}>{props.beer.available ? "Raktáron" : "Nincs Raktáron"}</strong>

      <button 
        onClick={()=>props.addToCart(props.beer)}
        disabled={!props.beer.available}
      >Kosárba!</button>
    </div>
  )
}

export default BeerCard