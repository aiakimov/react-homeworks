import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AddName from "./AddName.tsx";


import DreamTeam from "./complexComponent/DreamTeam";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>


    <DreamTeam />


  </React.StrictMode>
);
