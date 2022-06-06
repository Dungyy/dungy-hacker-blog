import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">REGISTER</span>
      <form className="registerForm">
      <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter username.."
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter email.."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter Password.."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
      <Link to="/login" className="link" style={{backgroundColor: "transparent"}}>LOGIN</Link>
      </button>
    </div>
  );
}
