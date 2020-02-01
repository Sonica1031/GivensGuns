import React, {useState} from "react";
import {Link} from "react-router-dom";
import PistolsMap from "./PistolsMap";

function Guns(props){
return(
    <div>
        <h1>Guns</h1>
    <div className="wrapped">
        <Link to="/Guns/Pistols">Pistols</Link>
        <Link to="/Rifles">Rifles</Link>
        <Link to="/All">All</Link>
        <PistolsMap />
    </div>
    </div>
    
    )
}
export default Guns;
