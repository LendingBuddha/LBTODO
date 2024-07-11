// src/pages/user/User.js
import React, { useState } from 'react'
import 'react-phone-input-2/lib/style.css';
import { FaUser,FaUserEdit} from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePermIdentity } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import {Link}  from 'react-router-dom'
import './User.css'
import Edit from './Edit'

function User() {
  return(
        <div className='scrollable-container'>
            <h3 className='profile-head'>Profile <FaUser size='1.4rem'/></h3>
            <div className='profile-body' >
              <p>Manage your profile settings</p>
              <hr style={{borderTop:'2px solid black'}}/>
            </div>
            <div className='details'>
              <div className='fullname'><MdOutlinePermIdentity size='1.7rem' color='black'/> krishna kumar</div>
            </div>
            <div className='details'>
              <div className='emailid'><MdOutlineEmail size='1.5rem' color='black'/> user@gmail.com</div>
            </div>
            <div className='details'>
              <div className='phoneno'><CiMobile1 size='1.5rem' color='black'/> +123456789</div>
            </div>   
            <Link to='/edit'><button className='button'>Edit Profile</button></Link>            
                
       </div>

          
      
        
  )
}
export default User
