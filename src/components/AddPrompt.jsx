import { useState } from "react"

const AddPrompt = ({add}) => {

  let [name, nameUpdate] = useState("");

  function handleName(event) {
    nameUpdate(event.target.value)
  }

  function cancel() {
    
  }

  return (
    <div className="promt-container">
        <div className="prompt">
            <label htmlFor="sequance-name">Name:</label>
            <input type="text" id="sequance-name" onChange={handleName} value={name}/>
            <div className="row">
                <button danger="" onClick={cancel}>Cancel</button>
                <button target="" onClick={e => add(name)}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default AddPrompt
