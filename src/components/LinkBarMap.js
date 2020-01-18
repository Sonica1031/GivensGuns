import React from "react";
import {Link} from "react-router-dom";

const LinkBarMap = prop =>{
    return(
    <Link to={prop.Value}>
        {prop.Title}
    </Link>
    )
}

export default LinkBarMap;