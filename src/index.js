import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./Components/Router/NavBar";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  </React.StrictMode>
);
