import Card from "./Card";

const Card_Collection = ({data}) => {

  return (
    <div className='card-container'>
      {console.log(data)}
      {data.map( card_data => {
        return <Card data={card_data}/>
      })}
    </div>
  )
}

export default Card_Collection
