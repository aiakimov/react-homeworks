import React from "react";
import "./Names.css";
import Users from "./data.json";

function Names() {
  return (
    <div className="wrapper-names">
      {Users.map((el) => {
        return (
          <div key={el._id} className="user-card">
            <h3>{el.name.first}</h3>
            <h4>{el.name.last}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Names;
