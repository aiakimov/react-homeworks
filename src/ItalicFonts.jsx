import "./ItalicFonts.css";
import React, { useState } from "react";

function ItalicFonts({ toolTip }) {
  const [state, setState] = useState(false);
  const [toolTipStyle, setToolTipStyle] = useState({
    display: "none",
  });
  const italicStyle = state ? "italic-font" : "";

  return (
    <div className="wrapper-italicfonts">
      <h1 className={italicStyle}>GIRLS GIRLS GIRLS</h1>
      <button
        onPointerEnter={(e) => {
          setToolTipStyle({
            display: "block",
            left: e.screenX + 20 + "px",
            top: e.screenY + 580 + "px",
          });
        }}
        onPointerLeave={() => {
          setToolTipStyle({
            display: "none",
          });
        }}
        className="italic-btn"
        onClick={() => setState(!state)}
      >
        I
      </button>
      <div style={toolTipStyle} className="tooltip">
        {toolTip}
      </div>
    </div>
  );
}

export default ItalicFonts;
