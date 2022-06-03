import React, { useState } from "react";
import card from "./img/1.jpg";
import "./Login.css";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const onClick = () => {
    setTimeout(() => setLoggedIn(true), 2000);
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
