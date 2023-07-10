import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const handleCalculate = () => {
    let calculatedResult;
    const number1 = parseFloat(Number(num1));
    const number2 = parseFloat(Number(num2));

    switch (operation) {
      case "+":
        calculatedResult = number1 + number2;
        break;
      case "-":
        calculatedResult = number1 - number2;
        break;
      case "*":
        calculatedResult = number1 * number2;
        break;
      case "/":
        calculatedResult = number1 / number2;
        break;
      default:
        calculatedResult = "";
        break;
    }

    setResult(calculatedResult);
  };

  return (
    <div className="calculator">
      <h2>Universal Calculator</h2>
      <div className="input-container">
        <input type="text" value={num1} onChange={handleNum1Change} />
        <select value={operation} onChange={handleOperationChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">x</option>
          <option value="/">/</option>
        </select>
        <input type="text" value={num2} onChange={handleNum2Change} />
      </div>
      <div className="btn-enter">
        <button onClick={handleCalculate}>Calculate</button>
      </div><br />
      {result && <p className="result">Result: {result}</p>}
    </div>
  );
}

export default App;
