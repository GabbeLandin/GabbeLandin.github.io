import React from "react"; 
import { BrowserRouter, Route, Link } from "react-router-dom"; 
import logo from "../Images/logo.png"

function Navbar() {   
    return(     
    <header className='header'>
        <img src={logo} alt="Logo" className="logo-image" />
        
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
                
    </header>
          
    ); 
} 
export default Navbar;