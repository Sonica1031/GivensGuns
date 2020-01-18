import React, {useEffect, useState} from "react";
import axios from "axios";

function Guns(){
    const [gunList, setGunList] = useState([]);
    useEffect(()=>{
        axios
        .get(`https://www.apexdata.gg/api/bghoPrWQMb5RgkPPACBD0wtt/weapons/pistols.json`)
        .then(res =>{
            console.log(res);
            setGunList(res);
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
        </div>
    </div>
    </div>
    
    )
}
export default Guns;
