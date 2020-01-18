import React from "react";
import BrickWall from "./images/BrickWall.jpeg"
function Home(props){
    const router = event => {
        event.preventDefault();
        props.history.push("/Sales")
      };

    return(
    <div className="Flex-Zone">
        <img src={BrickWall} width="100%" height="auto" position="absolute" z-index="-999"/>
        <button className="btn" onClick={router}>
        Shop now!
       </button>
    </div>
    )
}
export default Home;