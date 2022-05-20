import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import logo from "./img/TheAkim-logo-white.png";

import Boxes from "../Boxes";
import CustomButton from "../Button";
import Checkbox from "../Checkbox";
import Counter from "../Counter";
import Game from "../Game";
import ItalicFonts from "../ItalicFonts";
import Login from "../Login";
import Names from "../Names";
import SayHi from "../SayHi";
import Spinner from "../Spinner";
import Task from "../Task";
import Text from "../Text";

const App = () => {
  return (
    <>
      <nav className="header">
        <img src={logo} />
        <ul className="navbar">
          <li>
            <Link to="/boxes">Boxes</Link>
            <Link to="/button">Button</Link>
            <Link to="/checkbox">Checkbox</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/game">Game</Link>
            <Link to="/fonts">ItalicFonts</Link>
            <Link to="/login">Login</Link>
            <Link to="/names">Names</Link>
            <Link to="/say_hi">SayHi</Link>
            <Link to="/spinner">Spinner</Link>
            <Link to="/task">Task</Link>
            <Link to="/text">Text</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/boxes"
          element={
            <div className="wrapper">
              <Boxes cssClass="big" label="big" titleSize={40} />
              <Boxes cssClass="medium" label="medium" titleSize={30} />
              <Boxes cssClass="small" label="small" titleSize={20} />
            </div>
          }
        />
        <Route path="/button" element={<CustomButton />} />
        <Route path="/checkbox" element={<Checkbox />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/game" element={<Game />} />
        <Route path="/fonts" element={<ItalicFonts toolTip="Cursive" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/names" element={<Names />} />
        <Route path="/say_hi" element={<SayHi />} />
        <Route path="/spinner" element={<Spinner />} />
        <Route
          path="/task"
          element={
            <div className="wrapper">
              <Task number={1} text="Выпить чаю" done={true} />
              <Task number={2} text="Поспать" done={true} />
              <Task number={3} text="Выпить чаю" done={false} />
              <Task number={4} text="Поспать" done={false} />
            </div>
          }
        />
        <Route
          path="/text"
          element={
            <Text
              text="text text text"
              textColor="red"
              size={25}
              underline={true}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
