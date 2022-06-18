import React from "react";
import logo from "./Path.png";

function Navbar (){
    return(
        <div className="navbar">
            <img src= {logo} className="logo" alt=""/>
            <h3>My travel journal</h3>
        </div>
    )
}


export default Navbar;