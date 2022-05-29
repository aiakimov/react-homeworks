import React, { FC, useState } from "react";
import "./AddName.css";

const AddName: FC = () => {
  const names = [
    "James",
    "Oliver",
    "Benjamin",
    "Emma",
    "Isabella",
    "Sophia",
    "Charlotte",
    "Mia",
    "Lucas",
    "Mason",
    "Evelyn",
    "Elijah",
    "Ava",
  ];
  const [people, setPeople] = useState<string[]>(["Jonh", "Bob", "Marlyn"]);

  let nameId = 0;

  const addNameToList = () => {
    const index = Math.floor(Math.random() * 13);
    const newArray = [...people, names[index]];
    setPeople(newArray);
  };

  return (
    <div className="wrapper">
      <ul>
        {people.map((name) => {
          return <li key={(nameId += 1)}>{name}</li>;
        })}
      </ul>
      <button onClick={addNameToList}>Add Name</button>
    </div>
  );
};
export default AddName;
