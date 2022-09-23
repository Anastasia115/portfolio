import { NavLink } from "react-router-dom";
export default function Nav() {

    return (
    <nav>
        <div id="lft">

        <NavLink to="/about" className="fancy-link">About</NavLink>
        <NavLink to="/work"className="fancy-link">Work</NavLink>
        </div>
        
        <div className="logo">

        <NavLink to="/about"><img src="./assets/logo.png" alt="logo">
            </img>
            </NavLink>
            
        </div>
        
        <div id="rgt">
        <NavLink to="/wip"className="fancy-link">Wip</NavLink>
        <NavLink to="/contact"className="fancy-link">Contact</NavLink>
        </div>

        </nav>
);
}