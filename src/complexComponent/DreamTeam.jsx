import React, { useEffect, useState } from "react";
import "./DreamTeam.css";
import List from "./List";
import { setToLocalStorage, getFromLocalStorage } from "./localstorage";
var _ = require("lodash");

function DreamTeam() {
  const usedCards = getFromLocalStorage();
  let checkedCards = [];
  usedCards != null ? (checkedCards = usedCards) : (checkedCards = []);
  const [heroCounter, setHeroCounter] = useState(checkedCards.length);
  const [warning, setWarning] = useState(false);
  useEffect(() => {
    renderFromLocalStorage();
    if (checkedCards.length < 5) {
      setWarning(false);
    }
  }, [warning]);

  const renderFromLocalStorage = () => {
    const cards = document.querySelectorAll(".hero-card");
    cards.forEach((elem, index) => {
      checkedCards.forEach((el) => {
        if (Number(el) === index) {
          elem.dataset.checked = "true";
          elem.classList.add("checked-card");
        }
      });
    });
  };

  const setIdInArray = (event) => {
    const thisCard = event.target.closest("li");

    if (thisCard.dataset.checked === "true") {
      checkedCards.push(thisCard.id);
      setToLocalStorage(checkedCards);
      setHeroCounter(heroCounter + 1);
    } else {
      _.pull(checkedCards, thisCard.id);
      setToLocalStorage(checkedCards);
      setHeroCounter(heroCounter - 1);
    }
  };

  const setCheck = (event) => {
    const thisCard = event.target.closest("li");
    if (thisCard) {
      if (checkedCards.length < 5) {
        thisCard.classList.toggle("checked-card");
        thisCard.dataset.checked === "true"
          ? (thisCard.dataset.checked = false)
          : (thisCard.dataset.checked = true);
        setIdInArray(event);
        setWarning(false);
      } else {
        if (thisCard.dataset.checked === "true") {
          thisCard.dataset.checked = false;
          thisCard.classList.toggle("checked-card");
          setIdInArray(event);
          setWarning(false);
          return;
        }
        if (thisCard.dataset.checked === "false") {
          setWarning(true);
        }
      }
    }
  };

  return (
    <div>
      <h2>
        choose heroes for your dream team!
        <span className="counter">{heroCounter} of 5 heroes selected!</span>
      </h2>
      {warning && <h1 className="warning">you can only choose 5 heroes!</h1>}
      <ul onClick={setCheck} className="wrapper-list">
        <List />
      </ul>
    </div>
  );
}

export default DreamTeam;
