import "./ItalicFonts.css";
import React, { useState } from "react";

function ItalicFonts({}) {
  const [state, setState] = useState(false);

  const italicStyle = state ? "italic-font" : "";

  return (
    <div className="wrapper-italicfonts">
      <h1 className={italicStyle}>GIRLS GIRLS GIRLS</h1>
      <button className="italic-btn" onClick={() => setState(!state)}>
        I
      </button>
    </div>
  );
}

export default ItalicFonts;
