import React, { useState, useEffect } from 'react';
import aboutText from "../texts/about.txt"
import image from "../Images/ingrid.jpg"
import "../css/about.css"

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
                    Om mig
                </h2>
                <p>
                    Jag är legitimerad psykolog och legitimerad psykoterapeut men också specialist i
                    psykologisk behandling/ psykoterapi. Det innebär att jag förutom den femåriga
                    universitetsutbildningen till psykolog har gått en treårig psykoterapeututbildning/
                    treårig specialistutbildning. Jag är även utbildad handledare och lärare i psykoterapi
                    och certifierad schematerapeut och handledare i schematerapi. <br/>
                    Jag har arbetat som psykolog i snart 30 år. Senaste 15 åren har jag arbetat med
                    utbildning och handledning, parallellt med klientarbete. De senaste 11 åren på
                    Karolinska Institutet, där jag varit kursansvarig på det 3 åriga
                    psykoterapeutprogrammet och även utvecklat en kurs i Compassionfokuserad terapi
                    tillsammans med Paul Gilbert. Jag har lång erfarenhet av compassionfokuserad
                    terapi, schematerapi och KBT. Terapiformer som är hjälpsamma för en mängd
                    tillstånd, som ångest-oro, nedstämdhet, utmattning-och stresstillstånd, kriser,
                    relationsproblem och känslomässiga svårigheter. Jag är en van handledare och
                    handleder såväl legitimerade psykologer, psykoterapeuter, som andra yrkesgrupper,
                    både i klientnära arbete och i form av utbildning. Tidigare har jag varit verksam inom
                    vuxenpsykiatrisk verksamhet men även arbetat många år med utveckling av
                    gruppbehandling, mindfulness och utbildning inom vården.
                    Jag är medlem i Sveriges Psykologförbund och Psykologföretagarna. Det innebär att
                    jag har de försäkringar som krävs samt följer förbundets etiska riktlinjer. Jag är även
                    medlem i intresseföreningarna <a className='link' href='https://sfkbt.se'> Svenska föreningen för KBT (sfKBT) </a>
                    ,
                    <a className='link' href='https://compassionatemind.se/'>Svenska föreningen för compassionfokuserad terapi</a>
                    , 
                    <a className='link' href='https://www.compassionatemind.co.uk/'>Compassionate Mind UK</a>
                    ,
                    <a className='link' href='https://www.schematherapysociety.org/'>ISST-International association for schematherapy</a>
                    
                    </p>
            </div>
            <img className='about-image' src={image}/>
        </div>
    )
}
export default About;