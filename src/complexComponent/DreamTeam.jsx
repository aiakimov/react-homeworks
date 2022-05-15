import React, { useEffect, useState } from "react";
import "./DreamTeam.css";
import List from "./List";
import { setToLocalStorage, getFromLocalStorage } from "./localstorage";
var _ = require("lodash");

function DreamTeam() {
  const [checkedCard, setCheckedCard] = useState(false);
  const setChecked = (index) => {
    console.log(index);
  };

  return (
    <div>
      <h2>
        choose heroes for your dream team!
        <span className="counter"> of 5 heroes selected!</span>
      </h2>
      <h1 className="warning">you can only choose 5 heroes!</h1>
      <ul className="wrapper-list">
        <List onClickHandler={setChecked} />
      </ul>
    </div>
  );
}

export default DreamTeam;
