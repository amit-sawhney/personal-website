import React from 'react';

import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav className="navbar-content">
            <Link style={{ flexGrow: 1 }} id="nav-item" to="/">Amit Sawhney</Link>
            <Link id="nav-item" to="/blog">Blog</Link>
            <Link id="nav-item" to="/">Contact</Link>

        </nav>

    );
}

export default Navbar;