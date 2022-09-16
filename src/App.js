import { useState } from "react";

import * as math from "mathjs";

import "./App.css";
import Button from "./components/Button";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val]);
  };

  const calculateResult = () => {
    const input = text.join(""); // Remove commas
    console.log(input);
    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  // <Button symbol="7" handleClick={addToText} />;

  return (
    <div className="App">
      <div className="calc_wrapper">
        <div className="display_container">
          <div className="previous">123+</div>
          <div className="current">4561111111</div>
        </div>
        <div className="btn_container">
          <Button symbol="AC" />
          <Button symbol="DEL" />
          <Button symbol="%" />
          <Button symbol="/" />
          <Button symbol="7" />
          <Button symbol="8" />
          <Button symbol="9" />
          <Button symbol="*" />
          <Button symbol="4" />
          <Button symbol="5" />
          <Button symbol="6" />
          <Button symbol="-" />
          <Button symbol="1" />
          <Button symbol="2" />
          <Button symbol="3" />
          <Button symbol="+" />
          <Button symbol="0" />
          <Button symbol="." />
          <Button symbol="=" btn2="btn2" spanTwo="spanTwo" />
        </div>
      </div>
    </div>
  );
};

export default App;
