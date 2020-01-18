import React from "react";
import { Link } from "react-router-dom"


function LinkBar (){
    return(
        <div className="Nav">
<div className="NavBar">
<Link exact to="/">
    Home
</Link>
</div>
<div className="NavBar">
<Link exact to="/Guns">
    Guns
</Link>
</div>
<div className="NavBar">
<Link exact to="/UsedGuns">
    Used Guns
</Link>
</div>
<div className="NavBar">
<Link exact to="/Ammo">
    Ammo
</Link>
</div>
<div className="NavBar">
<Link exact to="/Accessories">
    Accessories
</Link>
</div>
<div className="NavBar">
<Link exact to="/Sales">
    Sales
</Link>
</div>
<div className="NavBar">
<Link exact to="/ContactUs">
    Contact Us
</Link>
</div>

</div>
    )
}

export default LinkBar;