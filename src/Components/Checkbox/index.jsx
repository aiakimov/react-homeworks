import { useState } from "react";
import doneImg from "./img/1.png";
import errorImg from "./img/2.png";
import "./Checkbox.css";

function Checkbox() {
  const [img, setImg] = useState(doneImg);

  return (
    <div className="wrapper-checkbox">
      <div
        onClick={() => {
          if (img === doneImg) {
            return setImg(errorImg);
          }
          setImg(doneImg);
        }}
        className="checkbox"
      >
        <img className="checkbox-img" src={img} alt="" />
      </div>
    </div>
  );
}

export default Checkbox;
