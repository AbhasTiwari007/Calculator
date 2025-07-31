import { useState } from "react";

function Calc() {  
  const [data, setData] = useState(""); 

  const getValue = (event) => {
    setData(data + event.target.value);
  };

  const handleClear = () => {
    setData("");
  };

  const handleEqual = () => {
    try {
      setData(String(eval(data)));
    } catch {
      setData("Error");
    }
  };

  return (
    <div className="calculator">
      <div>
        <input type="text" value={data} readOnly />
      </div>
      <div className="zerthoRow">
        <button value="C" id="C" onClick={handleClear}>C</button>
        <button value="(" id="brac" onClick={getValue}>(</button>
        <button value=")" id="brac" onClick={getValue}>)</button>
        <button value="/" id="divi" onClick={getValue}>/</button>
      </div>
      <div className="firstRow">
        <button onClick={getValue} value="7">7</button>
        <button onClick={getValue} value="8">8</button>
        <button onClick={getValue} value="9">9</button>
        <button onClick={getValue} value="*" id="X">*</button>
      </div>
      <div className="secondoRow">
        <button onClick={getValue} value="4">4</button>
        <button onClick={getValue} value="5">5</button>
        <button onClick={getValue} value="6">6</button>
        <button onClick={getValue} value="-" id="sub">-</button>
      </div>
      <div className="thirdRow">
        <button onClick={getValue} value="1">1</button>
        <button onClick={getValue} value="2">2</button>
        <button onClick={getValue} value="3">3</button>
        <button onClick={getValue} value="+" id="add">+</button>
      </div>
      <div className="fourthRow">
        <button onClick={getValue} value="00">00</button>
        <button onClick={getValue} value="0">0</button>
        <button onClick={getValue} value=".">.</button>
        <button id="equal" value="=" onClick={handleEqual}>=</button>
      </div>
    </div>
  );
}

export default Calc;
