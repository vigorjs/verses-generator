import React from "react";

const CALC_OPERATOR_LIST = ["+", "*", "/", "^"];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInput: "",
      error: null,
    };
  }

  buttonHandler = (key) => {
    switch (key) {
      case "AC":
        this.setState({ displayInput: "", error: null });
        break;
      case "DEL":
        this.setState((prevState) => ({
          displayInput: prevState.displayInput.slice(0, -1),
          error: null,
        }));
        break;
      case "=":
        this.calculateResult();
        break;
      case "()":
        this.kurung();
        break;
      default:
        this.toDisplay(key);
    }
  };

  kurung = () => {
    this.setState((prevState) => {
      const { displayInput } = prevState;
      const openCount = (displayInput.match(/\(/g) || []).length;
      const closeCount = (displayInput.match(/\)/g) || []).length;

      if (openCount > closeCount) {
        return { displayInput: displayInput + ")", error: null };
      } else {
        return { displayInput: displayInput + "(", error: null };
      }
    });
  };

  toDisplay = (key) => {
    this.setState((prevState) => {
      const { displayInput } = prevState;
      const lastChar = displayInput.slice(-1);

      if (!/^[0-9\-+*/^()]$/.test(key)) {
        return { ...prevState };
      }

      if (key === "-") {
        if (lastChar === "-") {
          return { ...prevState };
        }
        return { displayInput: displayInput + key, error: null };
      }

      if (CALC_OPERATOR_LIST.includes(key) && CALC_OPERATOR_LIST.includes(lastChar)) {
        return { displayInput: displayInput.slice(0, -1) + key, error: null };
      }

      return { displayInput: displayInput + key, error: null };
    });
  };

  calculateResult = () => {
    try {
      const result = this.evaluateExpression(this.state.displayInput);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error("Invalid calculation");
      }
      this.setState({ displayInput: result.toString(), error: null });
    } catch (error) {
      this.setState({ error: "Error: " + error.message });
    }
  };

  evaluateExpression = (expression) => {
    const sanitizedExpression = expression.replace(/\^/g, "**");
    return Function(`'use strict'; return (${sanitizedExpression})`)();
  };

  isOperatorDisabled = (key) => {
    const { displayInput } = this.state;
    const lastChar = displayInput.slice(-1);
    return CALC_OPERATOR_LIST.includes(key) && (CALC_OPERATOR_LIST.includes(lastChar) || displayInput === "" || lastChar === "-");
  };

  render() {
    const { displayInput, error } = this.state;

    return (
      <div className="flex flex-col justify-center items-center verse-container z-10">
        <div className="w-[300px] h-full rounded-[25px] bg-white bg-opacity-5 shadow-lg backdrop-blur-md overflow-hidden mx-auto">
          {/* Display */}
          <div className="text-white text-right p-[30px] text-[36px]">
            {displayInput || "0"}
            {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-4 gap-[10px] p-[10px] bg-white bg-opacity-5 shadow-lg backdrop-blur-md">
            {[
              "AC", "()", "+", "DEL",
              "7", "8", "9", "/",
              "4", "5", "6", "*",
              "1", "2", "3", "-",
              "0", ".", "^", "=",
            ].map((key) => {
              const isDisabled = this.isOperatorDisabled(key);
              const isOperator = CALC_OPERATOR_LIST.includes(key) || key === "=";
              const buttonClass = `
                ${isOperator || key == "-" ? "bg-orange-500 bg-opacity-10" : "bg-white bg-opacity-5"}
                text-white text-2xl border-none rounded p-[10px] cursor-pointer transition-colors duration-200
                hover:${isOperator || key == "-" ? "bg-orange-500 bg-opacity-40" : "bg-white bg-opacity-40"}
                ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
              `;

              return (
                <button
                  key={key}
                  onClick={() => this.buttonHandler(key)}
                  disabled={isDisabled}
                  className={buttonClass}
                >
                  {key}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;