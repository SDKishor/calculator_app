import "./Button.css";

const Button = ({
  symbol = 0,
  color = "#243264",
  handleClick,
  btn2 = "",
  spanTwo = "",
}) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className={"button-wrapper " + btn2 + " " + spanTwo}
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};

export default Button;
