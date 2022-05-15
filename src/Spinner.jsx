import React, { useState } from "react";
import "./Spinner.css";

const Spinner = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="loader-wrapper">
      <div className={loading ? "loader loader-animated" : "loader"}></div>
      <button onClick={() => setLoading(!loading)}>
        {loading ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Spinner;
