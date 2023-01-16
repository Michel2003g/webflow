const InfoCard = (props) => {
  return (props.trigger) ? (
    <div className="info-card">
        {props.children}
    </div>
  ) : ""
}

export default InfoCard
