import React from "react";
import { Link } from "react-router-dom";
function Nav(){
    return(
        <>
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/student">Student</Link>
            <Link to="/contactUs">Contact Us</Link>
            
        </div>
        </>
    )
}
export default Nav;