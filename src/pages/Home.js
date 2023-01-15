import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Card_Collection from "../components/Card_Collection";

import AddPrompt from "../components/AddPrompt";
import { useEffect, useState } from "react";

const Home = () => {

  // here a hook is set for when the data is changed
  const [items, setItems] = useState([]);

  useEffect( () => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  function add(name) {
    items.push({
      name: name,
      links: []
    });
    setItems(items);
  }

  return (
    <div className="Home">
      <Searchbar />  
      <div className="container">
        <Card_Collection data={items}/>
      </div>
      <AddPrompt items={items} setItems={setItems} add={add}/>
      <button className="create-button button">Create</button>
    </div>
  )
}

export default Home
