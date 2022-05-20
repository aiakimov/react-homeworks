import React from "react";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import "./App.css";
import logo from "./img/TheAkim-logo-white.png";

import Boxes from "../Boxes";
import CustomButton from "../Button";
import Home from "../Home";
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/boxes">Boxes</NavLink>
          </li>
          <li>
            <NavLink to="/button">Button</NavLink>
          </li>
          <li>
            <NavLink to="/checkbox">Checkbox</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/game">Game</NavLink>
          </li>
          <li>
            <NavLink to="/fonts">ItalicFonts</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/names">Names</NavLink>
          </li>
          <li>
            <NavLink to="/say_hi">SayHi</NavLink>
          </li>
          <li>
            <NavLink to="/spinner">Spinner</NavLink>
          </li>
          <li>
            <NavLink to="/task">Task</NavLink>
          </li>
          <li>
            <NavLink to="/text">Text</NavLink>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
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
