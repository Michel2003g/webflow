const InfoCard = (props) => {
  return (props.trigger) ? (
    <div className={"info-card " + props.cardStyle}>
        {props.children}
    </div>
  ) : ""
}

export default InfoCard
