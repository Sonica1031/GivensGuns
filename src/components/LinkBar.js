import React from "react";
import { Link } from "react-router-dom"


function LinkBar (){
    return(
        <div className="Nav">
<div className="NavBar">
<Link exact to="/">
    <b>Home</b>
</Link>
</div>
<div className="NavBar">
<Link exact to="/Guns">
    <b>Guns</b>
</Link>
</div>
<div className="NavBar">
<Link exact to="/UsedGuns">
    <b>Used Guns</b>
</Link>
</div>
<div className="NavBar">
<Link exact to="/Ammo">
    <b>Ammo</b>
</Link>
</div>
<div className="NavBar">
<Link exact to="/Accessories">
    <b>Accessories</b>
</Link>
</div>
<div className="NavBar">
<Link exact to="/Sales">
    <b>Sales</b>
</Link>
</div>
<div className="NavBar">
<Link exact to="/ContactUs">
    <b>Contact Us</b>
</Link>
</div>

</div>
    )
}

export default LinkBar;