import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../data";
import LinkBarMap from "./LinkBarMap";

function LinkBar (){
    return(
<div className="Nav">
    {NavLinks.map(x =><div className="NavBar"> <LinkBarMap Value={x.Value} Title={x.Title}> </LinkBarMap> </div>)}
</div>
    )
}

export default LinkBar;