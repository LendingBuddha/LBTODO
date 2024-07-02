import React from "react";

const Signup = ({ toggleSubmit }) => {
  return (
    <>
      <div className="login-inputs">
        <input type="text" placeholder="Username" />
        <i className="bx bxs-user"></i>
      </div>
      <div className="login-inputs">
        <input type="email" placeholder="Email" />
        <i className="bx bxs-envelope"></i>
      </div>
      <div className="login-inputs">
        <input type="password" placeholder="Password" />
        <i className="bx bxs-lock-alt"></i>
      </div>
      <button className="btn">Sign Up</button>
      <div className="login-password">
        <a href="#login" onClick={toggleSubmit}>
          Already have an account?
        </a>
      </div>
    </>
  );
};

export default Signup;
