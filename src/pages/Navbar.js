import React from "react"; 
import { BrowserRouter, Route, Link } from "react-router-dom"; 
import logo from "../Images/logo.png"
import "../css/header.css"

function Navbar() {   
    return(
    <div>
    <header className='header'>
        <img src={logo} alt="Logo" className="logo-image" />
        <div className='logotext'>
            <h1>
                Ingrid Landin
            </h1>
            <h1>
                Psykologmotagning
            </h1>
            </div>
        <div className="subheader">
            <nav>       
            <ul>        
                <li>           
                    <Link to="/">Home</Link>        
                </li>         
                <li>           
                    <Link to="/about">About</Link>         
                </li>         
                <li>           
                    <Link to="/contact">Contact</Link>         
                </li>       
            </ul>    
        </nav> 
        </div>

    </header>
    <div className="navline"/>

    </div>
    ); 
} 
export default Navbar;