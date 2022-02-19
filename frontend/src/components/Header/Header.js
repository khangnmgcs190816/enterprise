import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Navbar from './NavBarTest';
import NavMUI from './NavMUI';

const Header = () => {
    return (
        <div id="header-nav">
            {/* <Link to="/">
                <img
                    src='images/Logo-Greenwich.png'
                    alt='FPTGreenwich'
                    style={{ maxHeight: '5rem', }}
                ></img>
            </Link>
            <br />
            <NavBar /> */}
            {/* <br /> */}
            <Navbar />
        </div>
    )
}

export default Header;