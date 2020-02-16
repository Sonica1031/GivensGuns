import React from 'react';
import {useState, useEffect} from 'react';
import PistolImg from '../images/pistol.jpeg';

function GunPistol(props){
    return(
 props.gun.find(item => {
    return item.id == props.gun.params.ID
 })
    )
}
export default GunPistol;