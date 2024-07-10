// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">DSA Algorithms</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/algorithms">Algorithms</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
