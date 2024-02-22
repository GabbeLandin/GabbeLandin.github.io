import React from "react";
import {Outlet} from "react-router-dom"; 
import Navbar from "./Navbar";
import Footer from "./Footer";
 
function Layout() {
  return (
    <body>       
        <Navbar />    
        <Outlet />
        <Footer />
    </body>
  );
}

export default Layout;