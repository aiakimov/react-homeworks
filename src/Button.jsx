import { MdRepeat, MdRepeatOne } from "react-icons/md";
import React, { useState } from "react";
import "./Button.css";
import imgPlayer from "./img/Button/1.gif";

function CustomButton() {
  const notRepeat = <MdRepeat color="rgb(0 49 122 / 43%)" size="5em" />;
  const onRepeat = <MdRepeat color="rgb(0 49 122 / 83%)" size="5em" />;
  const oneRepeat = <MdRepeatOne color="rgb(0 49 122 / 83%)" size="5em" />;
  const conditions = [];
  conditions.push(notRepeat, onRepeat, oneRepeat);

  const [btnCondition, setBtnCondition] = useState(0);

  const changeBtnCondition = () => {
    btnCondition < 2 ? setBtnCondition(btnCondition + 1) : setBtnCondition(0);
  };

  return (
    <div className="wrapper-button">
      <img src={imgPlayer} alt="" />
      <button className="repeatBtn" onClick={changeBtnCondition}>
        {conditions[btnCondition]}
      </button>
    </div>
  );
}

export default CustomButton;
