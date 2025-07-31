import { useState } from "react";
function Calc()
{
    const [input, setinput] = useState("");
    const handleClick = (value) => setInput((prev) => prev + value);
    const handleClear = () => setInput("");
    const handleEqual = () => {
    try {
        setInput(String(eval(input.replace(/÷/g, "/").replace(/×/g, "*"))));
        } catch {
        setInput("Error");
    }
};

    return(
        <div className="calculator">
            <div>
                <input type="text" />
            </div>
            <div className="zerthoRow">
                <button id="C" onClick={handleClear}>C</button>
                <button id="br" onClick={() => handleClick("(")}>(</button>
                <button id="brac" onClick={() => handleClick(")")}>)</button>
                <button id="divi" onClick={() => handleClick("/")}>÷</button>
            </div>
             <div className="firstRow">
                <button id="7" onClick={() => handleClick("7")}>7</button>
                <button id="8" onClick={() => handleClick("8")}>8</button>
                <button id="9" onClick={() => handleClick("9")}>9</button>
                <button id="X" onClick={() => handleClick("*")}>X</button>
            </div>
             <div className="secondoRow">
                <button id="4" onClick={() => handleClick("4")}>4</button>
                <button id="5" onClick={() => handleClick("5")}>5</button>
                <button id="6" onClick={() => handleClick("6")}>6</button>
                <button id="sub" onClick={() => handleClick("-")}>-</button>
            </div>
            <div className="thirdRow">
                <button id="1" onClick={() => handleClick("1")}>1</button>
                <button id="2" onClick={() => handleClick("2")}>2</button>
                <button id="3" onClick={() => handleClick("3")}>3</button>
                <button id="add" onClick={() => handleClick("+")}>+</button>
            </div>
              <div className="fourthRow">
                <button id="00" onClick={() => handleClick("00")}>00</button>
                <button id="0" onClick={() => handleClick("0")}>0</button>
                <button id="dot" onClick={() => handleClick(".")}>.</button>
                <button id="equal" onClick={handleEqual}>=</button>
            </div>
        </div>
    );
}
export default Calc