import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Card_Collection from "../components/Card_Collection";

import Popup from "../components/Popup";
import InfoCard from "../components/InfoCard";
import { useEffect, useState } from "react";

const Home = () => {

  // info
  const [info, setInfo] = useState(false);
  const [infoType, setInfoType] = useState("");

  // handle items
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || []);
  
  useEffect( () => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  function addItem() {
    setItems([...items,
      {
        name: name,
        links: [
          link
        ]
      }
    ]);
  }

  // add sequance prompt

  const [name, nameUpdate] = useState("");
  const [link, linkUpdate] = useState("");
  const [sequancePrompt, setSequancePrompt] = useState(false);

  function handleName(event) {
    nameUpdate(event.target.value);
  }

  function add(name) {
    if (name === "" || name == undefined) {
      setInfoType("denied")
      setInfo(<p>Name can not be empty !</p>);
      setSequancePrompt(false);
      return
    }

    if (link === "" || link == undefined) {
      setInfoType("denied")
      setInfo(<p>Link can not be empty !</p>);
      setSequancePrompt(false);
      return
    }

    addItem();
    setSequancePrompt(false);
    setInfoType("success");
    setInfo(<p>{name}, Added !</p>);
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
        <input type="text" id="sequance-name" onChange={(event) => nameUpdate(event.target.value)} value={name}/>
        <label htmlFor="sequance-name">Link:</label>
        <input type="text" id="sequance-name" onChange={(event) => linkUpdate(event.target.value)} value={link}/>
        <div className="row">
          <button danger="" onClick={cancel}>Cancel</button>
          <button target="" onClick={e => add(name)}>Add</button>
        </div>
      </Popup>
      
      <InfoCard trigger={info} cardStyle={infoType}>
        <p>{info}</p>
      </InfoCard>
      <button className="create-button button" onClick={() => setSequancePrompt(true)}>Create</button>
    </div>
  )
}

export default Home
