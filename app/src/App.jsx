import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import User from "./pages/user/User";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
