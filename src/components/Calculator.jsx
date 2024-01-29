import { useState } from "react";
import buttons from "../data/buttons.json";
import { evaluateExpression } from "../utils/evaluateExpression";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleClick = (e) => {
    const key = e.target.name;

    if (key === "AC") return setDisplay("0");

    if (key === "+/-") return setDisplay((prev) => `-(${prev})`);

    setDisplay((prev) => {
      if (prev === "Syntax Error" || prev === "Infinity") return key;

      if (key === "=") {
        const operation = prev.replace(/x/g, "*").replace(/÷/g, "/");
        return evaluateExpression(operation);
      }

      return prev === "0" ? key : prev + key;
    });
  };

  return (
    <div className="flex flex-col m-6">
      <div
        className={`display overflow-auto text-white p-6 font-light font-size-${
          display === "Syntax Error" || display === "Infinity" ? "3" : "4"
        }-rem`}
      >
        {display}
      </div>
      <section className="keypad">
        {buttons.map((button) => (
          <button
            key={button.name}
            name={button.name}
            onClick={handleClick}
            className={`btn-${
              button.name === "0" ? "special" : "normal"
            } color-${button.color} cursor-pointer text-3xl `}
          >
            {button.name}
          </button>
        ))}
      </section>
      <div className="bar mt-12 bg-white self-center rounded-md"></div>
    </div>
  );
};

export { Calculator };
