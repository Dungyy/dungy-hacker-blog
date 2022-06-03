import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter email.." />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter Password.." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
