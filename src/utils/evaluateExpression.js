import { evaluate } from "mathjs";

const evaluateExpression = (expression) => {
  try {
    const result = evaluate(expression).toString();
    return result;
  } catch (error) {
    return "Syntax Error";
  }
};

export { evaluateExpression };
