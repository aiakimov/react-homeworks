import React, { useEffect, useState } from "react";
import "./DreamTeam.css";
import List from "./List";

function DreamTeam() {
  const [amountCheckedCards, setAmountCheckedCards] = useState(0);

  return (
    <div>
      <div className="header-herous">
        <h2>
          choose heroes for your dream team!
          <span className="counter">
            {amountCheckedCards} of 5 heroes selected!
          </span>
        </h2>{" "}
        {amountCheckedCards === 5 && (
          <h1 className="warning">you can only choose 5 heroes!</h1>
        )}
      </div>

      <ul className="wrapper-list">
        <List setAmountCheckedCards={setAmountCheckedCards} />
      </ul>
    </div>
  );
}

export default DreamTeam;
