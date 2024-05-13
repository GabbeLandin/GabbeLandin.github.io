import { NavLink } from "react-router-dom"

const English = (() =>  {
    return(
        <NavLink to="Mitt utbud/english" > 
                <div className='offer'>
                    <h1>
                        English
                    </h1>
                    <p className='offers-p'>
                        I conduct therapy and supervision in English.
                    </p>
                </div>
                </ NavLink>
    )
})

export default English