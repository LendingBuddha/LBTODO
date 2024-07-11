// src/pages/user/User.js
import React from "react";
import styles from "./User.module.css"; 
import { FaRegUser } from "react-icons/fa";
import './User.css'// Import the CSS module
import {Link} from 'react-router-dom'

function User() {
  return (
    <div>
      <div className="profile-head">
        <FaRegUser size='2rem'/> User Profile
        <hr style={{borderTop:'2px solid grey'}}/>
      </div>
      <div className="profile-body">
        <ul>
          <p>Name: Krishna Gupta</p>
          <p>Email: abcxyz@gmail.com</p>
          <p>Mobile: +123456789</p>
        </ul>
      </div>
      <Link to="/edit"><button className="edit-button">Edit Profile</button></Link>
    </div>
  );
}

export default User;
