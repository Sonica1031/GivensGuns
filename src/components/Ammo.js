import React from "react";
import ammo from "./images/ammo.jpeg";
function Ammo(){
return(
    <div>
        <h1>Ammo</h1>
        <img src={ammo} width="400px"></img>
        <div className="SideBySideInfo">
        <p>Price</p>
        <p>Description</p>
        </div>
    </div>
)
}
export default Ammo;