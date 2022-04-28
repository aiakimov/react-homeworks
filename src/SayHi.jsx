import React, { useState } from "react";
import "./SayHi.css";

function SayHi() {
  const [loading, setLoading] = useState(false);
  const [greeting, setGreeting] = useState("");

  const sayHi = () => {
    setLoading(!loading);

    setTimeout(() => {
      setGreeting("HELLO!");

      setLoading(false); // почему если тут поставить setLoading(!loading),
      // то лоадер не исчезает, и консоль лог мне выводит
      // в любом месте функции что лоадинг=фолс, хотя до таймаута
      // он тру?
    }, 3000);
  };

  return (
    <div className="wrapper-sh">
      <div className="text">{greeting}</div>
      {loading && <div className="loader"></div>}
      <button onClick={sayHi}>Say HI</button>
    </div>
  );
}

export default SayHi;
