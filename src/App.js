import { useState } from "react";

import * as math from "mathjs";

import "./App.css";
import Button from "./components/Button";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val].join(""));
  };

  const calculateResult = () => {
    setResult(math.evaluate(text));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };
  const deleteInput = () => {
    setText(text.slice(0, -1));
    setResult("");
  };

  return (
    <div className="App">
      <div className="calc_wrapper">
        <div className="display_container">
          <div className="previous">{text}</div>
          <div className="current">{result}</div>
        </div>
        <div className="btn_container">
          <Button symbol="AC" handleClick={resetInput} />
          <Button symbol="DEL" handleClick={deleteInput} />
          <Button symbol="%" handleClick={addToText} />
          <Button symbol="/" handleClick={addToText} />
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="*" handleClick={addToText} />
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="-" handleClick={addToText} />
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" handleClick={addToText} />
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button
            symbol="="
            btn2="btn2"
            spanTwo="spanTwo"
            handleClick={calculateResult}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
