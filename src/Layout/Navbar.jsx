import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{float: "left"}}>
            Menu Navbar
            <br />
            <Link to="/">Home</Link>
            <Link to="/gedung">Gedung</Link>
        </div>
    )
}

export default Navbar;