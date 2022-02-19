import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/login">
                    <h1>Login</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/idea" activeStyle>
                        Ideas
                    </NavLink>
                    <NavLink to="/employees" activeStyle>
                        Employees
                    </NavLink>
                    <NavLink to="/dashboard" activeStyle>
                        Dashboard
                    </NavLink>
                </NavMenu>
                {/* <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn> */}
            </Nav>
        </>
    );
};

export default Navbar;
