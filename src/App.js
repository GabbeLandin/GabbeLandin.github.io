// App.js
/*
<div className="menu-container">
          <Menu right>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </Menu>
        </div>
*/
import React from 'react';
import './App.css';
import './Sidebar.css';
import logo from './logo.png'; // Import your image file
import ingrid from './ingrid.jpg'; // Import your image file
import { slide as Menu } from 'react-burger-menu';

function App() {
  return (
    <div>
      <head></head>
      <body>
          <header className='header'>
            <img src={logo} alt="Logo" className="logo-image" />
            <ul>
              <li><a href="default.asp">Home</a></li>
              <li><a href="news.asp">News</a></li>
              <li><a href="contact.asp">Contact</a></li>
              <li><a href="about.asp">About</a></li>
            </ul>
          </header>
          <div className="main">
            <div className='bigtext'>
              <h2>
                Medkänslofokuserad psykoterapi;
              </h2>
              <h2>
                Compassion Focused Therapy - CFT
                </h2>
            </div>
            
            <div className='main-text'>
                <div className='paragraph'>
                  <h2 className='rubrik'>
                      Vem är jag
                  </h2>
                  Jag heter Ingrid Landin och är en erfaren psykolog med över tjugo års erfarenhet inom området. Mitt specialområde är kognitiv beteendeterapi (KBT) och mindfulnessbaserade metoder. Jag brinner för att hjälpa människor att hantera ångest, depression och stress. I mina terapisessioner fokuserar jag på dig som individ och anpassar mina metoder efter dina behov. Min empatiska inställning och evidensbaserade tekniker har gjort att jag har fått ett gott rykte för att främja positiv förändring och hjälpa mina klienter att leva meningsfulla liv.
                </div>
                <img src={ingrid} alt="test"/>
            </div>
          </div>
          <footer className='footer'>
            <div><strong>Adress | </strong>potatisgatan 1337</div>
            <div><strong>Telefon | </strong>133713371337</div>
            <div><strong>E-post | </strong>potatis42@1337.com</div>
            <p>&copy; 2024 Dr. Ingrid Landin's Practice. All rights reserved.</p>
          </footer>
        
        
      </body>
    </div>
  );
}

export default App;
