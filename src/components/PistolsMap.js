import React, { useState , useEffect } from "react";
import {Link, Route} from 'react-router-dom';
import Pistol from '../data';
import PistolList from './PistolList';
import data from '../data';
import pistolImage from "./images/pistol.jpeg"

function PistolMap (){

    return (
        <div className="Card">
            {Pistol.map(x =>{
                return(
                <div>
            <Link to={`/Guns/Pistols/${x.ID}`}>
             <PistolList Name={x.Name} BarrelSize={x.BarrelSize} GunLength={x.GunLength} Frame={x.Frame} UnloadedWeight={x.UnloadedWeight} MagazineSize={x.MagazineSize} Ammo={x.Ammo} TriggerPull={x.TriggerPull}/>
                </Link>
            </div>
            
            )})}
        </div>
    )}

export default PistolMap;