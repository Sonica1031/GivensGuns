import React, {useEffect, useState} from "react";
import axios from "axios";
import pistol from "./images/pistol.jpeg"

function Guns(){
    const [gunList, setGunList] = useState([]);
    useEffect(()=>{
        axios
        .get(`https://www.apexdata.gg/api/bghoPrWQMb5RgkPPACBD0wtt/weapons/pistols.json`)
        .then(res =>{
            console.log(res);
            setGunList(res.data);
        })
        .catch(err =>{
            console.log(err);
        });
        }, [])

return(
    <div>
        <h1>Guns</h1>
    <div className="wrapped">
        <div>
            {gunList.map(x=> <div className="Card"><img src={pistol} width="250" /><div className="DescriptionsOnTop"><p>{x.name}</p><p>Ammo Capacity : {x.ammo_capacity}</p></div></div>)}
        </div>
    </div>
    </div>
    
    )
}
export default Guns;
