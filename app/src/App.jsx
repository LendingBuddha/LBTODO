import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import User from "./pages/user/User";
import Note from "./pages/note/Note";
import Navbar from "./components/navbar/Navbar";
import ProtectedRoute from "./pages/protectedRoute/protectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Edit from "./pages/user/Edit";
import Footer from './components/footer/Footer'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/note" element={<Note />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />{" "}
          <Route path="/note" element={<ProtectedRoute><Note /></ProtectedRoute>}/>
          <Route path="/user" element={<ProtectedRoute><User /></ProtectedRoute>}/>
          <Route path="/edit" element={<ProtectedRoute><Edit /></ProtectedRoute>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
