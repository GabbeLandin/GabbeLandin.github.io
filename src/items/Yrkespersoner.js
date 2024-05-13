import { NavLink } from "react-router-dom"


const Yrkespersoner = (() => {
    return(
        <NavLink to="/Mitt utbud/yrkesperson" > 
                <div className='offer'>
                    <h1>
                        Yrkespersoner
                    </h1>
                    <p className='offers-p'>
                        Jag erbjuder handledning och utbildning i psykoterapi. Främst i CFT, Schematerapi
                        och KBT, men även mindfulness.
                    </p>
                </div>
                </ NavLink>
    )
})

export default Yrkespersoner;