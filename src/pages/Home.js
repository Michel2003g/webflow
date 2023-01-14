import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Card_Collection from "../components/Card_Collection";

import AddPrompt from "../components/AddPrompt";

const Home = () => {
  return (
    <div className="Home">
      <Searchbar />  
      <div className="container">
        <Card_Collection />
      </div>
      {/* <AddPrompt /> */}
    </div>
  )
}

export default Home
