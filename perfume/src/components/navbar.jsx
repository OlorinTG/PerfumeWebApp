// navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import './navbar.css';  // Don't forget to import the CSS

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="links"> 
                {/* Added ul tag and fixed the className typo */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart"><ShoppingCart size={32}/></Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
