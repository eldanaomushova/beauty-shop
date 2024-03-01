import React from 'react'
import { Link } from "react-router-dom";
import '../styles/NavigationMain.css'

const NavigationMain = () => {
    return (
        <div className='navigation-container'>
            <nav className='navbar'>
                <Link to="/child">CHILD</Link>
                <Link to="/mens">MENS</Link>
                <Link to="/skin">HAND</Link>
                <Link to="/hair">HAIR</Link>
                <Link to="/body">BODY</Link>
            </nav>
        </div>
    )
}

export default NavigationMain
