const Card = ({data}) => {

  function openSequance() {
    data.links.map( link => {
      console.log(link)
      window.open(link, "_blank");
    })
  }

  return (
    <div className="card" onClick={openSequance}>
        <p className="title">{data.name}</p>
    </div>
  )
}

export default Card
