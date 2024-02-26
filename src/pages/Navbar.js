import React from "react"; 
import {NavLink } from "react-router-dom"; 
import logo from "../Images/logo.png"
import "../css/header.css"


function Navbar() {   
    return(
    <div>
    <header className='header'>
        <a href="/" className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
            <div className='logotext'>
                <h1>
                    Ingrid Landin
                </h1>
                <h1>
                    Psykologmotagning
                </h1>
                </div>
        </a>
        <nav className="links">       
                <ul>        
                    <li>           
                        <NavLink style={({ isActive }) => ({
                                    color: isActive
                                    ? "#aa2e2d"
                                    : "black",
                                    })}
                                    to="/">Home</NavLink>        
                    </li>         
                    <li>           
                        <NavLink style={({ isActive }) => ({
                                    color: isActive
                                    ? "#aa2e2d"
                                    : "black",
                                    })}
                                    to="/about">About</NavLink>         
                    </li>         
                    <li>           
                        <NavLink style={({ isActive }) => ({
                                    color: isActive
                                    ? "#aa2e2d"
                                    : "black",
                                    })}
                                    to="/erbjudanden">Erbjudanden</NavLink>         
                    </li>   
                    <li>           
                        <NavLink style={({ isActive }) => ({
                                    color: isActive
                                    ? "#aa2e2d"
                                    : "black",
                                    })}
                                    to="/contact">Contact</NavLink>         
                    </li>       
                </ul>    
            </nav> 
    </header>
    <div className="navline"/>

    </div>
    ); 
} 
export default Navbar;