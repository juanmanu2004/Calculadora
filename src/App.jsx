import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>¡Calculadora¡</h1>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
        ].map((item) => (
          <button
            key={item}
            onClick={() =>
              item === "=" ? handleCalculate() : handleClick(item)
            }
          >
            {item}
          </button>
        ))}
        <button className="clear" onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
}
