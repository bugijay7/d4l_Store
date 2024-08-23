import React, { useState } from 'react';
import './navbar.css';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import SearchBar from '../components/SearchBar.jsx';

function Navbar() {
    const [count, setCount] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                BUGI
            </div>
            
              <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <div className='nav-logo-mobile'> BUGI </div>
                  <ul>
                     <li><SearchBar /></li>
                    <li><a href="/" onClick={toggleMenu}>Home</a></li>
                    <li><a href="/listings" onClick={toggleMenu}>Our Products</a></li>
                    <li><a href="/about" onClick={toggleMenu}>About Us</a></li>
                    <li><a href="/cart" onClick={toggleMenu}><FaShoppingCart className='cart-icon' /> </a></li>
                </ul>
               
            </div>
            <div className='mobile-menu-icon' onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    );
}

export default Navbar;
