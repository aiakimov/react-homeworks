import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import SayHi from "./SayHi.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SayHi />
  </React.StrictMode>
);
