import React, { useState } from 'react';
import './edit.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaUser, FaUserEdit } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import axios from 'axios';
import User from './User'

const Edit = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState('');
  const [valid, setValid] = useState(true);
  const [image, setImage] = useState('');

  const handleSave = () => {
    setUser({ name, email, phone });
    alert('Profile updated successfully');
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png') && file.size <= 5 * 1024 * 1024) {
      setImage(file);
    } else {
      alert('Please upload a valid JPEG or PNG file under 5MB.');
    }
  };

  const handleApi = () => {
    const formData = new FormData();
    formData.append('image', image);
    axios.post('url', formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  const handleChange = (value) => {
    setPhone(value);
    setValid(validatenumber(value));
  };

  const validatenumber = (phone) => {
    const phonePattern = /^\d{12}$/;
    return phonePattern.test(phone);
  };

  return (
    <div className='scrollable-container'>
      <div>
        <h4 className='basic-info'>Basic Info <CgDetailsMore /></h4>
        <div className='basic-info-body'>
          Edit Your information
          <div className='form-group'>
            <label>Full Name</label>
            <input
              className='name'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input
              className='email'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <div className='phone-input-container'>
              <label className='phone'>Phone Number
                <PhoneInput
                  country={'us'}
                  value={phone}
                  onChange={handleChange}
                  inputProps={{ required: true }}
                />
              </label>
            </div>
            {!valid &&
              <p className='error-message'>Please enter a valid number.</p>}
          </div>
          <hr style={{ borderTop: '2px solid black' }} />
        </div>
      </div>

        <button className='update' onClick={handleSave}>Update Profile!</button>
      
    </div>
  );
};

export default Edit;
