import { NavLink } from "react-router-dom"

const English = (() =>  {
    return(
        <NavLink to="/Mitt utbud/english" > 
                <div className='offer'>
                    <h1>
                        English
                    </h1>
                    <p className='offers-p'>
                    I offer therapy for private clients and couples, and supervision and training
                    for therapeutic professionals.
                    </p>
                </div>
                </ NavLink>
    )
})

export default English