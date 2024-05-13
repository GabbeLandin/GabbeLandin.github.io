import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/App.css';
import "../css/home.css"
import ingrid from '../Images/Bild.png'; // Import your image file
import Privatpersoner from '../items/Privatpersoner';
import Yrkespersoner from '../items/Yrkespersoner';
import English from '../items/English';

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
                    Mottagningen drivs av Ingrid Landin Leg Psykolog/Leg Psykoterapeut. <br/>
                    Handledare och lärare psykoterapi.<br/>
                    Specialist inom psykoterapi.<br/>
                    Certifierad schematerapeut och handledare i schematerapi.<br/>
                    Lärare och handledare i CFT, compassion fokuserad terapi.<br/>
                </p>
                </div>
                <img src={ingrid} alt="test" className='ingrid-home'/>
            </div>
            <div className='offers'>
                <Privatpersoner />
                <Yrkespersoner />
                <English />
            </div>
        </div>
    )
}
export default Home;