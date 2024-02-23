import React from "react";
import "../css/footer.css"

export default function Footer(){
    return(
        <footer className='footer'>
            <div className="footline"/>

            <div><strong>Adress | </strong>potatisgatan 1337</div>
            <div><strong>Telefon | </strong>133713371337</div>
            <div><strong>E-post | </strong>potatis42@1337.com</div>
            <p>&copy; 2024 Dr. Ingrid Landin's Practice. All rights reserved.</p>
        </footer>
    )
}