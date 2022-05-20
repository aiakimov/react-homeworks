import React, { useState } from "react";
import "./SayHi.css";

function SayHi() {
  const [loadingHello, setLoadingHello] = useState(false);
  const [greeting, setGreeting] = useState("");

  const sayHi = () => {
    setLoadingHello(!loadingHello);

    setTimeout(() => {
      setGreeting("HELLO!");

      setLoadingHello(false);
    }, 3000);
  };

  return (
    <div className="wrapper-sh">
      <div className="text">{greeting}</div>
      {loadingHello && <div className="loader"></div>}
      <button onClick={sayHi}>Say HI</button>
    </div>
  );
}

export default SayHi;
