import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtqhqUgf7tYCtFGPFXIi10tlbSoshh5dU",
        {
          email: email,
          password: password,
          returnSecureToekn: true,
        }
      )
      .then((idToken) => {
        // localStorage.setItem("user",idToken)
        console.log(idToken);
        localStorage.setItem("user", "LOGGED_IN");
        if (localStorage.getItem("user")) {
          history.replace("/jobs/admin");
          window.location.reload(false);
        }
        console.log("LOGGED_IN");
      });
  };
  return (
    <div className="login_main">
      <div className="login_main_inner">
        <p className="sign" align="center">
          Sign in
        </p>
        <form className="form1">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="un "
            type="text"
            value={email}
            align="center"
            placeholder="Username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="pass"
            value={password}
            type="password"
            align="center"
            placeholder="Password"
          />
          <button onClick={submitHandler} className="submit" align="center">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
