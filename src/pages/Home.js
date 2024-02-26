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
                <h1 className='rubrik'>
                    Välkommen
                </h1>
                <p>
                    Mottagningen drivs av Ingrid Landin Leg Psykolog/Psykoterapeut. <br/>
                    Handledare och lärare psykoterapi.<br/>
                    Specialist inom psykoterapi.<br/>
                    Certifierad Psykoterapeut och Handledare i schematerapi.<br/>
                    Lärare och Handledare i CFT, compassion fokuserad terapi.<br/>
                </p>
                </div>
                <img src={ingrid} alt="test" className='ingrid-home'/>
            </div>
            <div className='offers'>
                <div className='offer'>
                    <h1>
                        Privatperson
                    </h1>
                    <p className='offers-p'>
                        Har massa saker som är jätterbra hej hejoj inaosubd oiabsdo baib ibaousdop
                    </p>
                </div>
                
                <div className='offer'>
                    <h1>
                        Yrkesperson
                    </h1>
                    <p className='offers-p'>
                        Har massa saker som är jätterbra hej hejoj inaosubd oiabsdo baib ibaousdop
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Home;