import React, { useState } from "react";
import "./Spinner.css";

const Spinner = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  return (
    <div className="loader-wrapper">
      <div
        className={
          loadingSpinner
            ? "loader-spinner loader-animated-spinner"
            : "loader-spinner"
        }
      ></div>
      <button onClick={() => setLoadingSpinner(!loadingSpinner)}>
        {loadingSpinner ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Spinner;
