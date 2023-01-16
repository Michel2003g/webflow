import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Card_Collection from "../components/Card_Collection";

import Popup from "../components/Popup";
import InfoCard from "../components/InfoCard";
import { useEffect, useState } from "react";

const Home = () => {

  // info
  const [info, setInfo] = useState(false);

  // handle items
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || []);
  
  useEffect( () => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  function addItem(name) {
    setItems([...items,
      {
        name: name,
        links: []
      }
    ]);
  }

  // add sequance prompt

  const [name, nameUpdate] = useState("");
  const [sequancePrompt, setSequancePrompt] = useState(false);

  function handleName(event) {
    nameUpdate(event.target.value)
  }

  function add(name) {
    addItem(name);
    setSequancePrompt(false);
    setInfo(false);
    setTimeout(
      setInfo(<p>Item Added</p>)
    , 50)
  }

  function cancel() {
    setSequancePrompt(false);
  }

  return (
    <div className="Home">
      <Searchbar />  
      <div className="container">
        <Card_Collection data={items} key={items}/>
      </div>
      <Popup trigger={sequancePrompt}>
        <label htmlFor="sequance-name">Name:</label>
        <input type="text" id="sequance-name" onChange={handleName} value={name}/>
        <div className="row">
          <button danger="" onClick={cancel}>Cancel</button>
          <button target="" onClick={e => add(name)}>Add</button>
        </div>
      </Popup>
      
      <InfoCard trigger={info}>
        <p>{info}</p>
      </InfoCard>
      <button className="create-button button" onClick={() => setSequancePrompt(true)}>Create</button>
    </div>
  )
}

export default Home
