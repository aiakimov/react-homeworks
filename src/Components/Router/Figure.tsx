import { FC } from "react";
import { useParams } from "react-router-dom";
import "./Figure.css";

const Figure: FC = () => {
  const { type, color } = useParams();
  const newStyle = {
    backgroundColor: `${color}` || "red",
    borderRadius: `${Number(type) === 1 ? "0" : "50%"}` || "50%",
  };

  return (
    <div className="figure" style={newStyle}>
      {Number(type) === 1 ? "Square" : "Circle"}
    </div>
  );
};

export default Figure;
