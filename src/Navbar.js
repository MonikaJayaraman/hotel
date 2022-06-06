import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import Style from "styled-components";
import ReactDOM from "react-dom";

const Navbar = () => {
    return (
        <>
            
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        <h3>Home</h3>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        <h3>About</h3>
                    </NavLink>
                    <NavLink to="/rooms" activeStyle>
                        <h3>Rooms</h3>
                    </NavLink>
                    <NavLink to="/sign-in" activeStyle>
                        <h3>Sign In</h3>
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
