import React from 'react';

import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav className="navbar-content">
            <h2 style={{flexGrow: 1}}><Link id = "nav-item" to="/">Amit Sawhney</Link></h2>
            <h2><Link id = "nav-item" to="/">Blog</Link></h2>
            <h2><Link id = "nav-item" to="/">Contact</Link></h2>
            
        </nav>

    );
}

export default Navbar;