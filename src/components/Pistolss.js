import React, { useState, useEffect } from "react";
import pistolImage from "./images/pistol.jpeg";
import { Link, useParams } from "react-router-dom";
import Pistol from "../data";

function Pistolss(props) {
  const { gun } = props;

  return (
    <div className="SecondCard">
    <div className="InnerCard">
      <p> Name: {gun.Name} </p>
      <p> Barrel Size: {gun.BarrelSize} </p>
      <p> Gun Length: {gun.GunLength} </p>
      <p> Material of Frame: {gun.Frame} </p>
      <p> Unloaded Weight: {gun.UnloadedWeight} </p>
      <p> Magazine Size(s): {gun.MagazineSize} </p>
      <p> Type(s) of Ammo: {gun.Ammo} </p>
      <p> Trigger Pull Weight: {gun.TriggerPull} </p>
      <img src={pistolImage} alt="random stock image" width="250px" />
      </div>
    </div>
  );
}

export default Pistolss;
