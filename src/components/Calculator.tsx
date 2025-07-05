import { useState } from "react";

export const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const Button = ({ onClick, className, children }) => (
    <button
      onClick={onClick}
      className={`h-16 text-xl font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );

  const handleClick = (value: string) => {
    console.log("Botão clicado:", value);
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
          onClick={() => setDisplay("0")}
          className="col-span-2 bg-red-600 text-white"
        >
          AC
        </Button>
        <Button
          onClick={() => handleClick("/")}
          className="bg-orange-500 text-white"
        >
          ÷
        </Button>
        <Button
          onClick={() => handleClick("*")}
          className="bg-orange-500 text-white"
        >
          ×
        </Button>

        <Button
          onClick={() => handleClick("7")}
          className="bg-gray-700 text-white"
        >
          7
        </Button>
        <Button
          onClick={() => handleClick("8")}
          className="bg-gray-700 text-white"
        >
          8
        </Button>
        <Button
          onClick={() => handleClick("9")}
          className="bg-gray-700 text-white"
        >
          9
        </Button>
        <Button
          onClick={() => handleClick("-")}
          className="bg-orange-500 text-white"
        >
          −
        </Button>

        <Button
          onClick={() => handleClick("4")}
          className="bg-gray-700 text-white"
        >
          4
        </Button>
        <Button
          onClick={() => handleClick("5")}
          className="bg-gray-700 text-white"
        >
          5
        </Button>
        <Button
          onClick={() => handleClick("6")}
          className="bg-gray-700 text-white"
        >
          6
        </Button>
        <Button
          onClick={() => handleClick("+")}
          className="bg-orange-500 text-white"
        >
          +
        </Button>

        <Button
          onClick={() => handleClick("1")}
          className="bg-gray-700 text-white"
        >
          1
        </Button>
        <Button
          onClick={() => handleClick("2")}
          className="bg-gray-700 text-white"
        >
          2
        </Button>
        <Button
          onClick={() => handleClick("3")}
          className="bg-gray-700 text-white"
        >
          3
        </Button>
        <Button
          onClick={() => handleClick("=")}
          className="row-span-2 bg-blue-600 text-white"
        >
          =
        </Button>

        <Button
          onClick={() => handleClick("0")}
          className="col-span-2 bg-gray-700 text-white"
        >
          0
        </Button>
        <Button
          onClick={() => handleClick(".")}
          className="bg-gray-700 text-white"
        >
          .
        </Button>
      </div>
    </div>
  );
};
