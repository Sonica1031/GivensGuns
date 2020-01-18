import React from "react";
import BackgroundHome from "./images/BackgroundHome.png"
function Home(){
    const router = event => {
        event.preventDefault();
      };

    return(
    <div>
        <img src={BackgroundHome} width="100%" position="absolute" z-index="-1"/>
        <button className="btn" onClick={router}>
        Shop now!
       </button>
    </div>
    )
}
export default Home;