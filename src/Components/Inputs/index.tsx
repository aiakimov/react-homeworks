import React, { ChangeEvent, FC, useState } from "react";
import "./Inputs.css";

interface PropsInputs {}

const Inputs: FC<PropsInputs> = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const [checkbox, setCheckbox] = useState(false);
  const [range, setRange] = useState(0);
  const [date, setDate] = useState("");
  const [list, setList] = useState("Lorem");
  const [radio, setRadio] = useState("");
  const [textarea, setTextarea] = useState("");
  const [result, setResult] = useState(false);

  const onChange: Function = (
    event: ChangeEvent<HTMLInputElement>,
    setFunc: React.Dispatch<React.SetStateAction<any>>,
    type: Function
  ): void => {
    if (event.target.name === "checkbox") {
      setFunc(event.target.checked);
      return;
    }
    setFunc(type(event.target.value));
  };

  return (
    <div className="inputs">
      <label htmlFor="text">text</label>
      <input
        name="text"
        type="text"
        value={text}
        onChange={(event) => {
          onChange(event, setText, String);
        }}
      />
      <label htmlFor="number">number</label>
      <input
        min={0}
        max={100}
        name="number"
        type="number"
        value={number}
        onChange={(event) => {
          onChange(event, setNumber, Number);
        }}
      />
      <label htmlFor="checkbox">checkbox</label>
      <input
        name="checkbox"
        type="checkbox"
        checked={checkbox}
        onChange={(event) => {
          onChange(event, setCheckbox, Boolean);
        }}
      />
      <label htmlFor="range">range {range}</label>
      <input
        min={0}
        max={100}
        name="range"
        type="range"
        value={range}
        onChange={(event) => {
          onChange(event, setRange, Number);
        }}
      />
      <label htmlFor="date">date {date}</label>
      <input
        name="date"
        type="date"
        value={date}
        onChange={(event) => {
          onChange(event, setDate, String);
        }}
      />
      <label>list</label>
      <select
        onChange={(event) => {
          onChange(event, setList, String);
        }}
      >
        <option value="lorem">lorem</option>
        <option value="ipsum">ipsum</option>
        <option value="dolor">dolor</option>
        <option value="sit">sit</option>
        <option value="amet">amet</option>
        <option value="consectetur">consectetur</option>
      </select>
      <label htmlFor="">radio</label>
      <form>
        <label htmlFor="radio">
          <input
            name="radio"
            type="radio"
            value="minima"
            onChange={(event) => {
              onChange(event, setRadio, String);
            }}
          />
          minima
        </label>
        <label htmlFor="radio2">
          <input
            name="radio"
            type="radio"
            value="repudiandae"
            onChange={(event) => {
              onChange(event, setRadio, String);
            }}
          />
          repudiandae
        </label>
        <label htmlFor="radio2">
          <input
            name="radio"
            type="radio"
            value="explicabo"
            onChange={(event) => {
              onChange(event, setRadio, String);
            }}
          />
          explicabo
        </label>
      </form>
      <label htmlFor="">textarea</label>
      <textarea
        value={textarea}
        onChange={(event) => {
          onChange(event, setTextarea, String);
        }}
      ></textarea>

      <button
        onClick={() => {
          setResult(!result);
        }}
      >
        {result ? "HIDE RESULT" : "VIEW RESULT"}
      </button>

      {result && (
        <div className="result">
          <h5>text: {text};</h5>
          <h5>number: {number};</h5>
          <h5>checkbox: {String(checkbox)};</h5>
          <h5>range: {range};</h5>
          <h5>date: {date};</h5>
          <h5>list: {list};</h5>
          <h5>radio: {radio};</h5>
          <h5>textarea: {textarea}.</h5>
        </div>
      )}
    </div>
  );
};

export default Inputs;
