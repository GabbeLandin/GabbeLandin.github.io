import React from "react";
import "../css/footer.css"

export default function Footer(){
    return(
        <footer className='footer'>
            <div className="footline"/>

            <div><strong>Adress | </strong>Humlegårdsgatan 5, 1 tr, 114 46 Stockholm</div>
            <div><strong>Telefon | </strong>076 396 8412</div>
            <div><strong>E-post | </strong>PsykologIngridLandin@gmail.com</div>
            <p>&copy; 2024 Ingrid Landin's Practice. All rights reserved.</p>
        </footer>
    )
}