import "./Text.css";

function Text({ text, textColor, size, underline }) {
  const style = {
    color: textColor,
    fontSize: size + "px",
    textDecoration: underline == true ? "underline" : "none",
  };

  return (
    <div className="Text" style={style}>
      {text}
    </div>
  );
}

export default Text;
