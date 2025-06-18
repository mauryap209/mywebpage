import React from 'react'
import './Navbar.css' // Assuming you have a CSS file for styling
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
const Navbar = () => {
    const [menu, setMenu] =useState(false);
  return (
    <nav>
        <Link className='title' to="">My Website</Link>
        
            <div className="menu" onClick={() => setMenu(!menu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        {/* <ul className={menu ? "active" : ""} onClick={() => setMenu(!menu)}></ul> */}

        <ul className={menu ? "open" : ""} >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

        </ul>
    </nav>
  )
}

export default Navbar