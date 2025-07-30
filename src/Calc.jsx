import { useState } from "react";
function Calc()
{
    return(
        <div className="calculator">
            <div>
                <input type="text" />
            </div>
            <div className="zerthoRow">
                <button id="C">C</button>
                <button id="brac">()</button>
                <button id="percent">%</button>
                <button id="divi">/</button>
            </div>
             <div className="firstRow">
                <button id="7">7</button>
                <button id="8">8</button>
                <button id="9">9</button>
                <button id="X">X</button>
            </div>
             <div className="secondoRow">
                <button id="4">4</button>
                <button id="5">5</button>
                <button id="6">6</button>
                <button id="minus">-</button>
            </div>
            <div className="thirdRow">
                <button id="1">1</button>
                <button id="2">2</button>
                <button id="3">3</button>
                <button id="plus">+</button>
            </div>
              <div className="fourthRow">
                <button id="plusAndminus">+/-</button>
                <button id="0">0</button>
                <button id="dot">.</button>
                <button id="equal">=</button>
            </div>
        </div>
    );
}
export default Calc