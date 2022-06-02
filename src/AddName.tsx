import React, { FC, useState } from "react";
import "./AddName.css";

interface namesList {
  name: string;
  id: number;
}

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
  const [people, setPeople] = useState<namesList[]>([
    {
      name: "Jonh",
      id: 1,
    },
    {
      name: "Bob",
      id: 2,
    },
    {
      name: "Marlyn",
      id: 3,
    },
  ]);

  const addNameToList = () => {
    const index = Math.floor(Math.random() * 13);
    const newArray = [...people, { name: names[index], id: people.length + 1 }];
    setPeople(newArray);
  };

  return (
    <div className="wrapper">
      <ul>
        {people.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <button onClick={addNameToList}>Add Name</button>
    </div>
  );
};
export default AddName;
