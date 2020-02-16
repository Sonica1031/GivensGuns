import React from 'react';
import PistolImg from '../images/pistol.jpeg';
import {Link} from 'react-router-dom';
import GunPistol from './GunPistol'

function PistolList(props) {
return(
    <div>
        <Link to={`/Guns/Pistols/${props.gun.ID}`}>
        <GunPistol gun = {props.gun} id = {props.gun.ID}/>
        </Link>
    </div>
)
}

export default PistolList;