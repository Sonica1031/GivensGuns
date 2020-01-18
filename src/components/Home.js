import React from "react";
import BackgroundHome from "./images/BackgroundHome.png"
import BrickWall from "./images/BrickWall.jpeg"
function Home(){
    const router = event => {
        event.preventDefault();

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