import React from "react";
import { heroes } from "./herous.jsx";

function List() {
  return heroes.map((el, index) => {
    return (
      <li data-checked={false} key={index} id={index} className="hero-card">
        <img src={el.img} alt="" />
        <span>{el.name}</span>
      </li>
    );
  });
}

export default List;
