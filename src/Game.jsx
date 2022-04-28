import { useState } from "react";
import "./Game.css";

function Game() {
  const [color, setColor] = useState(`red`);
  const [position, setPosition] = useState([50, 60]);

  const style = {
    backgroundColor: color,
    top: position[0] + "px",
    left: position[1] + "px",
  };

  console.log();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const playGame = () => {
    const rgb = [getRandomInt(255), getRandomInt(255), getRandomInt(255)];
    setPosition([getRandomInt(900), getRandomInt(900)]);
    setColor("rgb(" + rgb.join() + ")");
  };

  return (
    <div className="wrapper-game">
      <div className="circle" style={style} onClick={() => playGame()}></div>
    </div>
  );
}

export default Game;
