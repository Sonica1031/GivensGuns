import React from "react";
import {NavLink, Route} from "react-router-dom";
import Pistols from "./Pistols";
import Pistol from "../data";

function Guns(props){


return(
    <div>
        <h1>Guns</h1>
    <div className="wrapped">
        <nav>
        <NavLink to="/Guns/Pistols">Pistols</NavLink>
        <NavLink to="/Rifles">Rifles</NavLink>
        <NavLink to="/All">All</NavLink>
        </nav>

        <Route exact path="/Pistols/:ID?"
        render={props => <Pistols GunInfo={Pistol} {...props} items={Guns}/>} 
       />
    </div>
    </div>
    
    )
}
export default Guns;
