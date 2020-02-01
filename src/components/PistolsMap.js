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
             <PistolList props={x}/>
                </Link>
            </div>
            
            )})}
        </div>
    )}

export default PistolMap;