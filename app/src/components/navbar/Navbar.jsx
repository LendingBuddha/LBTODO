// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  function handleDropdownClick() {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  }

  function hideDropdown() {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.style.display = "none";
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" className="logo_img" />
        <span>To Do List </span>
      </div>
      <ul className="navbar-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/note">Create a note</NavLink>
        </li>
        <li className="dropdown">
          <Link
            to="/user"
            className="dropdown-toggle"
            onClick={handleDropdownClick}
          >
            User
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/login" onClick={hideDropdown}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={hideDropdown}>
                Signup
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
