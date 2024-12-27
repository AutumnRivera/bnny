import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="Navigation">
            <div>
                <NavLink className="NavElement" to="/">Home</NavLink>
                <NavLink className="NavElement" to="/about">About Me</NavLink>
                <NavLink className="NavElement" to="/bnny">Bunny</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;