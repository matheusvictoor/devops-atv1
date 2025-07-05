import { useState } from "react";

export const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const Button = ({ onClick, className, children }) => (
    <button
      onClick={onClick}
      className={`h-16 text-xl font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const calculate = (firstValue, secondValue, op) => {
    switch (op) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "*":
        return firstValue * secondValue;
      case "/":
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const result = calculate(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const handleEqual = () => {
    const inputValue = parseFloat(display);
    if (operation && previousValue !== null) {
      const result = calculate(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-900 p-6 rounded-2xl shadow-2xl">
      <div className="mb-4">
        <div className="bg-gray-800 rounded-lg p-4 text-right">
          <div className="text-3xl font-mono text-white overflow-hidden">
            {display}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <Button
          onClick={clear}
          className="col-span-2 bg-red-600 hover:bg-red-700 text-white"
        >
          AC
        </Button>
        <Button
          onClick={() => performOperation("/")}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          ÷
        </Button>
        <Button
          onClick={() => performOperation("*")}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          ×
        </Button>

        <Button
          onClick={() => inputNumber("7")}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          7
        </Button>
        <Button
          onClick={() => inputNumber("8")}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          8
        </Button>
        <Button
          onClick={() => inputNumber("9")}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          9
        </Button>
        <Button
          onClick={() => performOperation("-")}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          −
        </Button>

        <Button
          onClick={() => inputNumber("4")}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          4
        </Button>
        <Button
          onClick={() => inputNumber("5")}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          5
        </Button>
        <Button
          onClick={() => inputNumber("6")}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          6
        </Button>
        <Button
          onClick={() => performOperation("+")}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          +
        </Button>

        <Button
          onClick={() => inputNumber("1")}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          1
        </Button>
        <Button
          onClick={() => inputNumber("2")}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          2
        </Button>
        <Button
          onClick={() => inputNumber("3")}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          3
        </Button>
        <Button
          onClick={handleEqual}
          className="row-span-2 bg-blue-600 hover:bg-blue-700 text-white"
        >
          =
        </Button>

        <Button
          onClick={() => inputNumber("0")}
          className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white"
        >
          0
        </Button>
        <Button
          onClick={inputDecimal}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          .
        </Button>
      </div>
    </div>
  );
};
