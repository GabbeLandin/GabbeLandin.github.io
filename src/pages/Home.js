import React from 'react';
import '../css/App.css';
import "../css/home.css"
import ingrid from '../Images/Bild.png'; // Import your image file
import sakura from '../Images/Sakura.jpeg'

function Home(){
    return( 
        <div className="main">
            <div className='sakura'/>
            <div className="navline"/>
            
            <div className='main-text'>
                <div className='paragraph'>
                <h2 className='rubrik'>
                    Vem är jag
                </h2>
                <p>
                Jag heter Ingrid Landin och är en erfaren psykolog med över tjugo års erfarenhet inom området. Mitt specialområde är kognitiv beteendeterapi (KBT) och mindfulnessbaserade metoder. Jag brinner för att hjälpa människor att hantera ångest, depression och stress. I mina terapisessioner fokuserar jag på dig som individ och anpassar mina metoder efter dina behov. Min empatiska inställning och evidensbaserade tekniker har gjort att jag har fått ett gott rykte för att främja positiv förändring och hjälpa mina klienter att leva meningsfulla liv.
                </p>
                </div>
                <img src={ingrid} alt="test" className='ingrid-home'/>
            </div>
        </div>
    )
}
export default Home;