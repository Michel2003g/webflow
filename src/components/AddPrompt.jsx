import { useState } from "react"

const AddPrompt = ({add}) => {

  let [name, nameUpdate] = useState("");

  function handleName(event) {
    nameUpdate(event.target.value)
  }

  return (
    <div className="promt-container">
        <div className="prompt">
            <label htmlFor="sequance-name">Name:</label>
            <input type="text" id="sequance-name" onChange={handleName} value={name}/>
            <div className="row">
                <button danger="" >Cancel</button>
                <button target="" onClick={e => add(name)}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default AddPrompt
