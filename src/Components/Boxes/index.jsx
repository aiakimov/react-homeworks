import "./Boxes.css";

const Boxes = ({ cssClass, label, titleSize }) => {
  const textStyle = {
    fontSize: titleSize + "px",
  };

  return (
    <div className="wrapper">
      <div className={cssClass}>
        <h2 style={textStyle}>{label}</h2>
      </div>
    </div>
  );
};

export default Boxes;
