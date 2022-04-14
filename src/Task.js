import "./Task.css";
import React, { useState } from "react";

function Task({ number, text, done }) {
  const [state, setState] = useState(done);
  const textStyle =
    state === true
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };

  return (
    <li className="task">
      <input
        type="checkbox"
        checked={state}
        onChange={() => {
          setState(!state);
        }}
      />
      <span>{number}.</span>
      <p style={textStyle}>{text}</p>
    </li>
  );
}

export default Task;
