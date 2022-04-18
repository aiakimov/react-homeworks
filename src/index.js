import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Task from "./Task.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ul className="task-list">
      <Task number={1} text="Нaписать список" done={true}></Task>
      <Task number={2} text="Зачеркнуть первый пункт" done={false}></Task>
      <Task
        number={3}
        text="Сделать вид, что очень занят работой"
        done={false}
      ></Task>
      <Task number={4} text="" done={false}></Task>
      <Task number={5} text="Придумать интересный пункт 4" done={false}></Task>
    </ul>
  </React.StrictMode>
);
