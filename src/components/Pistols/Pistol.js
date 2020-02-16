import React from 'react';
import { data } from "../../data";
import PistolList from "./PistolList"


function Pistol(){
    return(
    data.map(gun=>{
    return(
        <div className = "Card InnerCard">
    <PistolList gun = {gun} key = {gun.ID}/>
    </div>
    )
    })
    )
}


export default Pistol;