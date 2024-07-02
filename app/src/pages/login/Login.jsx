import React, { useState } from "react";
import "./login.css";
import Signup from "../signup/Signup";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleSubmit = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>{isLogin ? "Welcome" : "Create Account"}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="login-body">
          {isLogin ? (
            <>
              {" "}
              <div className="login-inputs">
                <input type="email" placeholder="Email" />
                <i className="bx bxs-envelope"></i>
              </div>
              <div className="login-inputs">
                <input type="password" placeholder="Password" />
                <i className="bx bxs-lock-alt"></i>
              </div>
              <button className="btn">Login</button>
              <div className="login-password">
                <a href="#forgot">Forgot Password?</a>
                <div className="remember-create">
                  <span>Remember</span>
                  <a href="#create" onClick={toggleSubmit}>
                    Create Account
                  </a>
                </div>
              </div>
            </>
          ) : (
            <Signup toggleSubmit={toggleSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
