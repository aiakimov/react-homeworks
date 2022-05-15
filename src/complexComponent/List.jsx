import React, { useState } from "react";
import { heroes } from "./herous.jsx";

function List({ onClickHandler }) {
  return heroes.map((el, index) => {
    return (
      <li
        className="hero-card"
        key={index}
        onClick={() => {
          onClickHandler(index);
        }}
      >
        <img src={el.img} alt="" />
        <span>{el.name}</span>
      </li>
    );
  });
}

export default List;
