import React, { useState } from "react";
import styles from "./Login.module.css"; // Import the CSS module
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseconfig";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     window.location.href = "/";
  //     toast.success("User logged Successfully!!", {
  //       position: "top-center",
  //     });
  //   } catch (error) {
  //     if (error.code === "auth/invalid-credential") {
  //       toast.error("No user found with this email and password.", {
  //         position: "bottom-center",
  //       });
  //     } else if (error.code === "auth/wrong-password") {
  //       toast.error("Incorrect password. Please try again.", {
  //         position: "bottom-center",
  //       });
  //     } else {
  //       toast.error(error.message, {
  //         position: "bottom-center",
  //       });
  //     }
  //     console.log(error.message);
  //   }
  // };

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", { email, password })
      .then((res) => {
        if (res.data.status) {
          toast.success("Login successful!", {
            position: "top-center",
          });
          navigate("/");
        } else {
          toast.error(res.data.message || "Login failed.", {
            position: "top-center",
          });
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 404) {
            toast.error("User not found. Please check your email.", {
              position: "bottom-center",
            });
          } else if (err.response.status === 401) {
            toast.error("Incorrect password. Please try again.", {
              position: "bottom-center",
            });
          } else {
            toast.error(
              err.response.data.message ||
                "An error occurred. Please try again.",
              {
                position: "bottom-center",
              }
            );
          }
        } else {
          toast.error("An error occurred. Please try again.");
        }
        console.error(err); // Handle any other error
      });
  };
  function SignInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      if (result.user) {
        toast.success("user logged in successfully", {
          position: "top-center",
        });
        window.location.href = "/";
      }
    });
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.header}>
            <h1>Welcome</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.body}>
            <form onSubmit={handleSubmit}>
              {" "}
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
              <button className={styles.btnlogin}>Login</button>
              <button
                onClick={SignInWithGoogle}
                aria-label="Sign in with Google"
                className={styles.googleSignInButton}
              >
                <div className={styles.googleContent}>
                  <div className={styles.googleLogoContainer}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={styles.googleLogo}
                    >
                      <title>Sign in with Google</title>
                      <desc>Google G Logo</desc>
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        className={styles.googleLogoBlue}
                      ></path>
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        className={styles.googleLogoGreen}
                      ></path>
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        className={styles.googleLogoYellow}
                      ></path>
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        className={styles.googleLogoRed}
                      ></path>
                    </svg>
                  </div>
                  <span className={styles.googleSignInText}>
                    Sign in with Google
                  </span>
                </div>
              </button>
              <div className={styles.password}>
                <a href="#forgot">Forgot Password?</a>
                <div className={styles.remember}>
                  <span>Remember</span>
                  <Link to="/signup">
                    <a href="#create">Create Account</a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
