// src/components/Navbar.js

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className='title'>TODO APP</Link>
      <div className='menu'>
        <span></span>
        <span></span>
        <span></span>
      </div> 
      <ul className="navbar-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/note">Create a note</NavLink>
        </li>
        <li className="dropdown">
          <NavLink to="/user" className="dropdown-toggle">User</NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
