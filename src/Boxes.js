import './Boxes.css'

function Boxes({cssClass, label, titleSize}) {
  const textStyle = {
    fontSize: titleSize + "px",
  }

  return (
    <div className={cssClass}>
      <h2 style={textStyle}>{label}</h2>
    </div>
  )
}

export default Boxes;