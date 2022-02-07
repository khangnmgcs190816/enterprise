import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

const NavBar = () => {
    return <div>
      
        {/* 
        
        VYPNK 7 Feb 2022
        Navbar template
            
        */}
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li>
                    <Link to={"/dashboard"} className="nav-link">
                    {" "}
                    Dashboard{" "}
                    </Link>
                </li>
                <li>
                    <Link to={"/employees"} className="nav-link">
                    {" "}
                    Employees{" "}
                    </Link>
                </li>
                <li>
                    <Link to={"/ideas"} className="nav-link">
                    {" "}
                    Ideas{" "}
                    </Link>
                </li>
            </ul>
        </nav>
    </div>;
};

export default NavBar;
