import React, { useState, useEffect } from 'react';
import aboutText from "../texts/about.txt"
import image from "../Images/ingrid.jpg"





function About(){
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
        fetch(aboutText)
          .then(response => response.text())
          .then(text => {
            setFileContent(text);
          })
          .catch(error => console.error('Error fetching the file:', error));
      }, []);
    return(
        <div className='main-text'>
            <div className='paragraph'>
                <h2 className='rubrik'>
                    Vem är jag
                </h2>
                <p>{fileContent}</p>
            </div>
            <img src={image}/>
        </div>
    )
}
export default About;