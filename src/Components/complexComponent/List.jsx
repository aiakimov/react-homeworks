import React, { useEffect, useState } from "react";
import { heroes } from "./herous.jsx";
import { setToLocalStorage, getFromLocalStorage } from "./localstorage.jsx";

function List({ setAmountCheckedCards }) {
  const [innerAmountCheckedCards, setInnerAmountCheckedCards] = useState(0);
  const [selectedHeroes, setSelectedHeroes] = useState(
    heroes.map(() => {
      return false;
    })
  );
  useEffect(() => {
    const amount = selectedHeroes.reduce((acc, el) => {
      if (el === true) {
        acc.push(el);
      }
      return acc;
    }, []).length;
    setInnerAmountCheckedCards(amount);
    setAmountCheckedCards(amount);
  }, [selectedHeroes]);

  useEffect(() => {
    if (getFromLocalStorage()) {
      setSelectedHeroes(getFromLocalStorage());
    }
  }, []);

  const onCopyHero = (copy, index) => {
    copy[index] = !copy[index];
    setSelectedHeroes(copy);
    setToLocalStorage(copy);
  };

  const onSelectHero = (index) => {
    const copySelectedHeroes = [...selectedHeroes];
    if (innerAmountCheckedCards < 5) {
      onCopyHero(copySelectedHeroes, index);
    } else {
      if (copySelectedHeroes[index] === true) {
        onCopyHero(copySelectedHeroes, index);
      }
    }
  };

  return heroes.map((hero, index) => {
    return (
      <li
        className={
          selectedHeroes[index] ? "hero-card checked-card" : "hero-card"
        }
        key={hero.name}
        onClick={() => {
          onSelectHero(index);
        }}
      >
        <img src={hero.img} alt="" />
        <span>{hero.name}</span>
      </li>
    );
  });
}

export default List;
