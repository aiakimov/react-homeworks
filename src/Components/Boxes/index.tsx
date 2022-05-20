import { FC } from "react";
import "./Boxes.css";

interface Props {
  cssClass: string;
  label: string;
  titleSize: number;
}

const Boxes: FC<Props> = ({ cssClass, label, titleSize }) => {
  const textStyle = {
    fontSize: titleSize + "px",
    display: "block",
  };

  return (
    <div className="wrapper">
      <div className={cssClass}>
        <h2 style={textStyle}>{label}</h2>
      </div>
    </div>
  );
};

export default Boxes;
