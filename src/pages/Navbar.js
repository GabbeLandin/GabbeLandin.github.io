import React, { useEffect, useState } from "react"; 
import { BrowserRouter, Route, NavLink, useLocation } from "react-router-dom"; 
import { fallDown as Menu } from 'react-burger-menu'
import logo from "../Images/logo.png"
import "../css/header.css"


function Navbar() {   
    const location = useLocation();
/*
    <Menu right width={"100%"}>
                    <NavLink style={({ isActive }) => ({
                                    color: isActive
                                    ? "#aa2e2d"
                                    : "black",
                                    })}
                                    to="/">Home</NavLink>   
                    <NavLink style={({ isActive }) => ({
                                    color: isActive
                                    ? "#aa2e2d"
                                    : "black",
                                    })}
                                    to="/about">About</NavLink>  
                    <NavLink style={({ isActive }) => ({
                                    color: isActive
                                    ? "#aa2e2d"
                                    : "black",
                                    })}
                                    to="/contact">Contact</NavLink>  
                </Menu>
    */
    const navbar = () => {
        console.log(window.screen.width)
        if(window.screen.width < 850){
            return(
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
                                    to="/contact">Contact</NavLink>         
                    </li>       
                </ul>    
            </nav> 
            )
        }
        else
         return(
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
                                    to="/contact">Contact</NavLink>         
                    </li>       
                </ul>    
            </nav> 
         )
    }

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
        {navbar()}
    </header>
    <div className="navline"/>

    </div>
    ); 
} 
export default Navbar;