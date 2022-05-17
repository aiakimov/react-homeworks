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
    const amount = selectedHeroes.filter((el) => el === true).length;
    setInnerAmountCheckedCards(amount);
    setAmountCheckedCards(amount);
  }, [selectedHeroes]);

  useEffect(() => {
    if (getFromLocalStorage()) {
      setSelectedHeroes(getFromLocalStorage());
    }
  }, []);

  const onSelectHero = (index) => {
    const copySelectedHeroes = [...selectedHeroes];
    if (innerAmountCheckedCards < 5) {
      copySelectedHeroes[index] = !copySelectedHeroes[index];
      setSelectedHeroes(copySelectedHeroes);
      setToLocalStorage(copySelectedHeroes);
    } else {
      if (copySelectedHeroes[index] === true) {
        copySelectedHeroes[index] = !copySelectedHeroes[index];
        setSelectedHeroes(copySelectedHeroes);
        setToLocalStorage(copySelectedHeroes);
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
