import React, { FC, useEffect, useState } from "react";
import "./TimePicker.css";

const TimePicker: FC = () => {
  const [hours, setHours] = useState<number>(0);
  const [mins, setMins] = useState<number>(0);

  useEffect(() => {
    if (mins === -1) {
      setMins(59);
      setHours((prev) => prev - 1);
    }
    if (mins === 60) {
      setMins(0);
      setHours((prev) => prev + 1);
    }
    if (hours === 24) {
      setHours(0);
    }
    if (hours === -1) {
      setHours(23);
    }
  }, [mins, hours]);

  const increment = (setFunc: React.Dispatch<React.SetStateAction<number>>) => {
    setFunc((prev) => prev + 1);
  };
  const decrement = (setFunc: React.Dispatch<React.SetStateAction<number>>) => {
    setFunc((prev) => prev - 1);
  };

  return (
    <div className="wrapper">
      <h1 className="time">
        <span>{hours.toString().padStart(2, "0")}</span> :{" "}
        <span>{mins.toString().padStart(2, "0")}</span>
      </h1>
      <div className="btns-wrapper">
        <div>
          <button onClick={() => decrement(setHours)} className="btn">
            -
          </button>
          <button onClick={() => increment(setHours)} className="btn">
            +
          </button>
        </div>
        <div>
          <button onClick={() => decrement(setMins)} className="btn">
            -
          </button>
          <button onClick={() => increment(setMins)} className="btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
