import { NavLink } from "react-router-dom";
import {useState} from "react";
import Logo from "../assets/logo.png";

   
export const Nav = () =>{
    const [openNav, setOpenNav] = useState(false)


    return (
        <>
        <div className="navresponsive">
            <div className="hamburger" onClick={()=>{setOpenNav(!openNav)}}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className="logo1">
                <NavLink to="/about"><img src={Logo} alt="logo"></img>
                </NavLink>
            </div>
        </div>
    
    
    <div className={openNav ? "opennNav" : "navbarbig"}>

        <nav>
        <div id="lft">
            <NavLink to="/about" className="fancy-link">About</NavLink>
            <NavLink to="/work"className="fancy-link">Work</NavLink>
        </div>

        <div className="logo2">
            <NavLink to="/about"><img src={Logo} alt="logo"></img>
            </NavLink>
        </div>
        <div id="rgt">
            <NavLink to="/wip"className="fancy-link">Wip</NavLink>
            <NavLink to="/contact"className="fancy-link">Contact</NavLink>
        </div>
    </nav>
    </div>
    </>
    )
}