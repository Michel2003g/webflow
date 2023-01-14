const AddPrompt = () => {
  return (
    <div className="promt-container">
        <div className="prompt">
            <label htmlFor="sequance-name">Name:</label>
            <input type="text" id="sequance-name" />
            <div className="row">
                <button danger="">Cancel</button>
                <button target="">Add</button>
            </div>
        </div>
    </div>
  )
}

export default AddPrompt
