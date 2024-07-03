// src/components/Navbar.js
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <span className="dropdown-toggle">User</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
