import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Figure.css";

const types = [1, 2];
const colors = ["red", "gray", "blue", "cyan", "yellow", "orange"];

const NavBar: FC = () => {
  const [selectedColor, setSellectedColor] = useState<string>("red");
  const [selectedType, setSellectedType] = useState<number>(1);

  return (
    <>
      <div>
        <div className="nav">
          {colors.map((color) => {
            return (
              <NavLink
                key={color}
                to={`/navbar/figure/${selectedType}/${color}`}
                onClick={() => setSellectedColor(color)}
              >
                {color}
              </NavLink>
            );
          })}
        </div>
        <div className="nav">
          {types.map((type) => {
            return (
              <NavLink
                key={type}
                to={`/navbar/figure/${type}/${selectedColor}`}
                onClick={() => setSellectedType(type)}
              >
                {type === 1 ? "Square" : "Circle"}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default NavBar;
