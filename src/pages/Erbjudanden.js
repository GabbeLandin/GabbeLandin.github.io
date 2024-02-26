import React from "react";
import { NavLink } from "react-router-dom";
import "../css/erbjudanden.css"

export default function Erbjudanden(){
    return(
        <div>
            <div className='offers-erbjudanden'>
                <NavLink to="privatperson" > 
                    <div className='offer-erbjudanden'>
                        <h1>
                            Privatperson
                        </h1>
                        <p className='offers-p-erbjudanden'>
                            Har massa saker som är jätterbra hej hejoj inaosubd oiabsdo baib ibaousdop
                        </p>
                    </div>
                </NavLink>
                
                <NavLink to="yrkesperson" > 
                    <div className='offer-erbjudanden'>
                        <h1>
                            Yrkesperson
                        </h1>
                        <p className='offers-p-erbjudanden'>
                            Har massa saker som är jätterbra hej hejoj inaosubd oiabsdo baib ibaousdop
                        </p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}