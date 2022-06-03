import "./ItalicFonts.css";
import React, { useState } from "react";

function ItalicFonts({ toolTip }) {
  const [state, setState] = useState(false);
  const [toolTipStyle, setToolTipStyle] = useState({
    visibility: "hidden",
    opacity: 0,
  });
  const italicStyle = state ? "italic-font" : "";

  return (
    <div className="wrapper-italicfonts">
      <h1 className={italicStyle}>GIRLS GIRLS GIRLS</h1>
      <button
        onPointerEnter={(e) => {
          setToolTipStyle({
            visibility: "visible",
            opacity: 1,
            left: e.screenX - 50 + "px",
            top: e.screenY - 130 + "px",
          });
        }}
        onPointerLeave={(e) => {
          setToolTipStyle({
            visibility: "hidden",
            left: e.screenX + "px",
            top: e.screenY + "px",
            opacity: 0,
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
