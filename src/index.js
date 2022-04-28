import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import CounterF from "./CounterFunc.jsx";
import CounterC from "./CounterClass.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterF />

    <CounterC />
  </React.StrictMode>
);
