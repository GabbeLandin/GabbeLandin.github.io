import { NavLink } from "react-router-dom"

const Privatpersoner = (() => {
    return(
        <NavLink to="/Mitt utbud/privatperson" > 
                <div className='offer'>
                    <h1>
                        Privatpersoner
                    </h1>
                    <p className='offers-p'>
                        Jag erbjuder CFT (compassionfokuserad terapi), Schematerapi och KBT,
                        både individuellt och i par.
                    </p>
                </div>
                </ NavLink>
    )
})

export default Privatpersoner;