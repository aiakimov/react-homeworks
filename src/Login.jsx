import React, { useState } from "react";
import card from "./img/Login/1.jpg";
import "./Login.css";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);

  const onClick = () => {
    setLoggedIn(true);
  };

  return (
    <div className="login-wrapper">
      {loggedIn ? (
        <img src={card} alt="" />
      ) : (
        <button className="login-btn" onClick={onClick}>
          Sign in
        </button>
      )}
    </div>
  );
};

export default Login;
