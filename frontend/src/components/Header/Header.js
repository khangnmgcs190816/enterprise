import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/">
                        <img
                            src='images/Logo-Greenwich.png'
                            alt='FPTGreenwich'
                            style={{ maxHeight: '10rem', }}
                        ></img>
                    </Link>

                    <NavBar />
                </ul>
            </nav>
        </header>
    )
}

export default Header