import { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Figure.css";

const Figure: FC = () => {
  const [style, setStyle] = useState<object>({});
  const params = useParams();

  const getStyle = () => {
    const radius = Number(params.type) === 1 ? "0" : "50%";
    const newStyle = {
      backgroundColor: `${params.color}`,
      borderRadius: `${radius}`,
    };
    setStyle(newStyle);
  };

  useEffect(() => {
    getStyle();
  }, [params]);

  return (
    <div className="figure" style={style}>
      {Number(params.type) === 1 ? "Square" : "Circle"}
    </div>
  );
};

export default Figure;
