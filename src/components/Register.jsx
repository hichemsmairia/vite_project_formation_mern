import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Register.css";
import Logo from "../assets/img_avatar2.png";
function Register() {
  // les hooks doivent etre utilisés ici !
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [userData, setUserData] = useState({ username: "", password: "" });

  useEffect(() => {
    console.log("hello from useEffect ! ");
  }, [userData]);

  return (
    <form>
      <div className="imgcontainer">
        <h1>Register</h1>
        <img src={Logo} alt="Avatar" className="avatar" />
      </div>
      <div className="container">
        <label for="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          required
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          required
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />

        <button type="submit">Login</button>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn">
          Cancel
        </button>
        <span className="psw">
          Forgot <a href="#">password?</a>
        </span>
      </div>
      <h1>{userData.username}</h1> || <h1>{userData.password}</h1>
    </form>
  );
}

export default Register;
