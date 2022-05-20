import { FC, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Figure from "./Figure";
import "./Figure.css";

const types = [1, 2];
const colors = ["red", "gray", "blue", "cyan", "yellow", "orange"];

const NavBar: FC = () => {
  const [selectedColor, setSellectedColor] = useState<string>("");
  const [selectedType, setSellectedType] = useState<number>(1);

  return (
    <>
      <div>
        <div className="nav">
          {colors.map((color) => {
            return (
              <Link
                to={`figure/${selectedType}/${color}`}
                onClick={() => setSellectedColor(color)}
              >
                {color}
              </Link>
            );
          })}
        </div>
        <div className="nav">
          {types.map((type) => {
            return (
              <Link
                to={`figure/${type}/${selectedColor}`}
                onClick={() => setSellectedType(type)}
              >
                {type === 1 ? "Square" : "Circle"}
              </Link>
            );
          })}
        </div>
      </div>
      <Routes>
        <Route path="figure/:type/:color" element={<Figure />} />
      </Routes>
    </>
  );
};
export default NavBar;
