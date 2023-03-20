import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  //handle click
  const handleClick = (e) => {
    setResult(result?.concat(e.target?.name));
  };

  //clear button
  const clear = () => {
    setResult("");
  };

  //back button
  const backspace = () => {
    setResult(result?.slice(0, -1));
  };

  //calculator
  const calc = () => {
    try {
      setResult(
        Number(new Function("return " + result)().toString()).toFixed(2)
      );
    } catch (error) {
      setResult("inavalid format");
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <input type="text" className="calc-numbers" value={result} readOnly />
          <div className="calculator-buttons">
            <button onClick={clear} className="orange clear span-2">
              AC
            </button>
            <button onClick={backspace} className="orange">
              &larr;
            </button>
            <button onClick={handleClick} name="/" className="orange">
              &divide;
            </button>
            <button onClick={handleClick} name="7" className="btn">
              7
            </button>
            <button onClick={handleClick} name="8" className="btn">
              8
            </button>
            <button onClick={handleClick} name="9" className="btn">
              9
            </button>
            <button onClick={handleClick} name="*" className="orange">
              x
            </button>
            <button onClick={handleClick} name="4" className="btn">
              4
            </button>
            <button onClick={handleClick} name="5" className="btn">
              5
            </button>
            <button onClick={handleClick} name="6" className="btn">
              6
            </button>
            <button onClick={handleClick} name="-" className="orange">
              -
            </button>
            <button onClick={handleClick} name="1" className="btn">
              1
            </button>
            <button onClick={handleClick} name="2" className="btn">
              2
            </button>
            <button onClick={handleClick} name="3" className="btn">
              3
            </button>
            <button onClick={handleClick} name="+" className="orange">
              +
            </button>
            <button onClick={handleClick} name="0" className="btn span-3">
              0
            </button>
            <button onClick={calc} className="orange equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
