// src/pages/signup/Signup.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import styles from "./Signup.module.css"; // Import the CSS module
import { Link, useNavigate } from "react-router-dom";
// import { auth, db } from "../firebase/firebaseconfig";
// import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import axios from "axios";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setuserName] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  // const validatePassword = (password) => {
  //   const passwordCriteria = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
  //   return passwordCriteria.test(password);
  // };
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   if (!validatePassword(password)) {
  //     toast.error(
  //       "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
  //       {
  //         position: "bottom-center",
  //       }
  //     );
  //     return;
  //   }
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //     const user = auth.currentUser;
  //     console.log(user);

  //     if (user) {
  //       await setDoc(doc(db, "Users", user.uid), {
  //         email: user.email,
  //         Username: username,
  //       });
  //       console.log("Document successfully written!");
  //     }
  //     toast.success("User Registered Successfully!!", {
  //       position: "top-center",
  //     });
  //     navigate("/login");
  //   } catch (error) {
  //     console.error(error.message);
  //     if (error.code === "auth/email-already-in-use") {
  //       toast.error("The email address is already in use by another account.", {
  //         position: "bottom-center",
  //       });
  //     } else if (error.code === "auth/invalid-email") {
  //       toast.error("The email address is not valid.", {
  //         position: "bottom-center",
  //       });
  //     } else {
  //       toast.error(error.message, {
  //         position: "bottom-center",
  //       });
  //     }
  //   }
  // };
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/signup", {
        username,
        email,
        password,
      })
      .then((res) => {
        toast.success("Registration successful!", {
          position: "top-center",
        });
        if (res.data.status) {
          navigate("/login");
        } else {
          toast.error(res.data.message || "Registration failed.", {
            position: "bottom-left",
          });
        }
      })
      .catch((err) => {
        if (err.response) {
          // Server responded with a status other than 200 range
          toast.error(
            err.response.data.message || "An error occurred. Please try again.",
            {
              position: "bottom-center",
            }
          );
        } else {
          // Network or other errors
          toast.error("An error occurred. Please try again.", {
            position: "bottom-center",
          });
        }
        console.error(err);
      });
  };
  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.header}>
            <h1>Create Account</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.body}>
            <form onSubmit={handleRegister}>
              <div className={styles.inputs}>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    setuserName(e.target.value);
                  }}
                />
                <i className="bx bxs-user"></i>
              </div>
              <div className={styles.inputs}>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i className="bx bxs-envelope"></i>
              </div>
              <div className={styles.inputs}>
                <input
                  type={visible ? "password" : "text"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputAdornment position="end" className={styles.checkpassword}>
                  <IconButton onClick={() => setVisible(!visible)}>
                    {visible ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                  </IconButton>
                </InputAdornment>
              </div>
              <button className={styles.btn}>Sign Up</button>
              <div className={styles.password}>
                <Link to="/login">
                  <a href="#login">Already have an account?</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
