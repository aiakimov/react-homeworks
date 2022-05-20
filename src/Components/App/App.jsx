import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import logo from "./img/TheAkim-logo-white.png";

// import Boxes from "../Boxes";
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
            {/* <NavLink to="/boxes">Boxes</NavLink> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/button">Button</NavLink>
            <NavLink to="/checkbox">Checkbox</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/game">Game</NavLink>
            <NavLink to="/fonts">ItalicFonts</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/names">Names</NavLink>
            <NavLink to="/say_hi">SayHi</NavLink>
            <NavLink to="/spinner">Spinner</NavLink>
            <NavLink to="/task">Task</NavLink>
            <NavLink to="/text">Text</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/boxes"
          element={
            <div className="wrapper">
              <Boxes cssClass="big" label="big" titleSize={40} />
              <Boxes cssClass="medium" label="medium" titleSize={30} />
              <Boxes cssClass="small" label="small" titleSize={20} />
            </div>
          }
        /> */}
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
