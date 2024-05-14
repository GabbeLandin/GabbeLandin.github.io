import React from "react";
import { NavLink } from "react-router-dom";
import "../css/erbjudanden.css"
import Yrkespersoner from "../items/Yrkespersoner";
import English from "../items/English";
import Privatpersoner from "../items/Privatpersoner";

export default function Erbjudanden(){
    return(
        <div>
            <div className="terapiformer">
                <div className="form">
                    <h2>Compassion fokuserad terapi, CFT</h2>
                    <p>
                    Compassionfokuserad terapi (CFT) är en integrativ terapimetod med fokus på att utveckla förmågan till medkänsla. Medkänsla innebär att en intention av vilja minska lidande för sig själv och andra, genom att utveckla olika förmågor och färdigheter. I CFT arbetar man aktivt med att minska självkritik för att i stället skifta över till ett medkännande fokus, och med att utveckla förmågan att kunna vara med svåra känslor som skam, ilska och sorg på ett hjälpsamt sätt. 
                    Terapiformen utvecklades av Professor Paul Gilbert. Gilbert märkte i sitt arbete att det fanns en hel del klienter som inte blev hjälpt av traditionell kognitiv beteendeterapi. Han började därför undersöka vad det var som gjorde detta. Han upptäckte att vad många av dessa klienter hade gemensamt var att det var självkritisk och hade mycket skam. De flesta kunde förstå vad de behövde göra för att må bättre men gjorde det inte. Dessutom hade de svårt att känslomässigt relatera till både vad de behövde göra och deras egna problem. Gilbert började därför utveckla en terapiform som arbetar specifikt med detta.
                    I CFT kartlägger vi först vilka strategier du har med dig från din uppväxt och hur de påverkar ditt mående idag. Du kommer får information om hur din hjärna fungerar och hur den kan ställa till det för dig. Sedan undersöker vi tillsammans vad det är för just dig som hindrar dig från att leva som du vill. Och vi jobbar tillsammans mot att hitta ett vänligare förhållningssätt gentemot dig själv.
                    Terapiformen är inte inriktad på särskilda typer av problem. Det spelar ingen roll om du brottas med ångest, depression, trauma, relationsproblem eller utmattning.
                    Jag har regelbunden handledning med Paul Gilbert sedan snart 10 år och ett samarbete med honom kring utbildning och handledning i CFT.
                    </p>
                </div>
                <div className="form">
                    <h2>Kognitiv beteendeterapi, KBT</h2>
                    <p>
                    I kognitiv beteendeterapi fokuserar behandlingen på de tanke- och beteendemönster
                    som har bidragit till att utveckla och upprätthålla de svårigheterna och lidande man
                    vill få hjälp med. Metoden är flexibel och kan användas vid de flesta problem. I
                    behandlingen arbetar man med att bli medveten om och förändra sina mönster. På
                    så sätt uppstår även en förändring av känslor man plågas av som nedstämdhet, oro
                    eller ångest. Man arbetar även med hur problemen har uppstått för att öka
                    förståelsen, men fokus är i de flesta fall på här och nu. KBT har starkt vetenskapligt
                    stöd för en lång rad tillstånd, framförallt olika ångesttillstånd och depression.
                    </p>
                </div>
                <div className="form">
                    <h2>Schematerapi</h2>
                    <p>
                    Schematerapi är en vidareutveckling av KBT, som fokuserar på
                    känslomässiga behov och hur vi lärt oss att hantera våra behov och
                    känslor i relation till andra. Vi har alla behov av att känna oss sedda,
                    älskade, uppskattade mm, men kan av olika anledningar ha svårigheter
                    med att uttrycka behoven och att tillgodo se dem. Om det funnits
                    många erfarenheter av att inte ha blivit bemött på sätt som vi har
                    behövt av människor vi varit beroende av, kan vi ha utvecklat olika sätt
                    att skydda oss från att känna de känslor som är förknippade med de
                    ofta smärtsamma erfarenheterna. Strategier som sedan i sin tur skapar
                    lidande för oss i livet då de inte hjälper oss att få det vi behöver. Fokus i
                    schematerapi är att få hjälp med problematiska relationella teman i
                    livet. Ofta är det sårbarheter som aktiveras i nära relationer, men även i
                    yrkeslivet och med vänner. Med scheman avses den kombination av
                    tankar, känslor, beteenden och minnen som är associerade med olika
                    känslomässiga behov.
                    </p>
                </div>
            </div>
            <div className='offers-erbjudanden'>
                <Privatpersoner />
                <Yrkespersoner />
                <English />
            </div>
        </div>
    )
}