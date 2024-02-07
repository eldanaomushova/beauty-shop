import React from 'react'
import { Link } from "react-router-dom";
import '../styles/NavigationMain.css'

const NavigationMain = () => {
    return (
        <div className='navigation-container'>
            <nav className='navbar'>
                <Link to="/child">CHILD</Link>
                <Link to="/child">MENS</Link>
                <Link to="/child">HAND</Link>
                <Link to="/child">HAIR</Link>
                <Link to="/child">BODY</Link>
            </nav>
        </div>
    )
}

export default NavigationMain
