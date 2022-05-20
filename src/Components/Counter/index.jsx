import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="wrapper-counter">
      <button
        className="counter-button"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <h1 className="title-counter">{counter}</h1>
      <button
        className="counter-button"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
