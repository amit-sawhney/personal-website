import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <AppBar elevation={0} className="navbar" position="sticky">
            <Toolbar className="navbar-content">
                    <Link style={{ flexGrow: 1 }} id="nav-header" to="/">Amit Sawhney</Link>
                    <Link id="nav-item" to="/blog">Blog</Link>
                    <Link id="nav-item" to="/">Contact</Link>
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;