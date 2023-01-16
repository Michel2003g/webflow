const Popup = (props) => {
  return (props.trigger) ? (
    <div className="promt-container">
        <div className="prompt">
            {props.children}
        </div>
    </div>
  ) : ""
}

export default Popup

{/* <label htmlFor="sequance-name">Name:</label>
<input type="text" id="sequance-name" onChange={handleName} value={name}/>
<button danger="" onClick={cancel}>Cancel</button>
<button target="" onClick={e => add(name)}>Add</button> */}