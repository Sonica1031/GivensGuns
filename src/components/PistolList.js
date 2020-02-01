import React, {useState, useEffect} from "react";
import pistolImage from "./images/pistol.jpeg"
import { Link , useParams} from 'react-router-dom';
import Pistol from '../data';


function PistolList(props) {

return (
<div className="InnerCard">
<p>  Name: {props.Name} </p>
<p>  Barrel Size: {props.BarrelSize}  </p>
<p>  Gun Length: {props.GunLength}  </p>
<p>  Material of Frame: {props.Frame}  </p>
<p>  Unloaded Weight: {props.UnloadedWeight}  </p>
<p>  Magazine Size(s): {props.MagazineSize}  </p>
<p>  Type(s) of Ammo: {props.Ammo}  </p>
<p>  Trigger Pull Weight: {props.TriggerPull}  </p>
<img src= {pistolImage} alt="random stock image" width="250px"/>
</div>
)
}

export default PistolList;