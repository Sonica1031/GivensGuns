import React, {useEffect, useState} from "react";
import pistolImage from "./images/pistol.jpeg"

function Pistols (props){
    const [Gun, setGun] = useState([]);
    useEffect(()=> {

        const result = props.GunInfo.find(Pistol => {
            return Pistol.ID === props.match.params.ID
        })
        if(result){
        setGun([result]);
        console.log(result);
        }
        else{
        setGun(props.GunInfo);
        console.log(props.GunInfo)
        }
    }, []);

    return (
        <div>
            {Gun.map(prop => {
                return(
            <div>
                <p>  Name: {prop.Name}  </p>
                <p>  Barrel Size: {prop.BarrelSize}  </p>
                <p>  Gun Length: {prop.GunLength}  </p>
                <p>  Material of Frame: {prop.Frame}  </p>
                <p>  Unloaded Weight: {prop.UnloadedWeight}  </p>
                <p>  Magazine Size(s): {prop.MagazineSize}  </p>
                <p>  Type(s) of Ammo: {prop.Ammo}  </p>
                <p>  Trigger Pull Weight: {prop.TriggerPull}  </p>
                <img src= {pistolImage}/>
            </div>
                )
            })};
        </div>
    )
}

export default Pistols;