import React from "react";
import {Pistol} from '../data';
import PistolList from './PistolList';

function Pistols (){

    return (
        <div>
            {Pistol.map(x =>(
            <PistolList key={Pistol.ID} props={x} />
            ))}
        </div>
    );
}

export default Pistols;