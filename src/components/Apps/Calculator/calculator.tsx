import React, { useState, useEffect } from "react";
import "./Calculator.scss";
import "./styles/style-modernMac.scss";
import Window from "../Window/Window";
import icon from "./assets/calculator.png";

interface CalculatorProps {
  windowId: string;
  currentStyle: string;
}

const Calculator: React.FC<CalculatorProps> = ({
  windowId,
  currentStyle,
}) => {
  // App state
  const [isMinimized, setIsMinimized] = useState(true);

  //App functions

  const toggleMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  // Calculator state
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState<string | undefined>(undefined);


  //Calculator functions
  useEffect(() => {
    updateDisplay();
  }, [currentOperand, previousOperand, operation]);

  const clear = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation(undefined);
  };

  const deleteCharacter = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  const appendNumber = (number: string) => {
    if (number === "." && currentOperand.includes(".")) return;
    setCurrentOperand(currentOperand + number);
  };

  const chooseOperation = (newOperation: string) => {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    setOperation(newOperation);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  };

  const compute = () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    setCurrentOperand(computation.toString());
    setOperation(undefined);
    setPreviousOperand("");
  };

  const getDisplayNumber = (number: string) => {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("fr", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  };

  const updateDisplay = () => {
    if (operation != null) {
      return `${getDisplayNumber(previousOperand)} ${operation}`;
    } else {
      return "";
    }
  };

  const handleNumberClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    appendNumber(target.innerText);
  };

  const handleOperationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    chooseOperation(target.innerText);
  };

  const handleEqualsClick = () => {
    compute();
  };

  const handleAllClearClick = () => {
    clear();
  };

  const handleDeleteClick = () => {
    deleteCharacter();
  };


  return (
    <>
    {isMinimized ? (
      // Minimized app
      <div
        className="c-dock__app js-dock__app"
        data-application-name="Calculator"
        onClick={toggleMinimized}
      >
        <img className="c-dock__icon js-dock__icon" src={icon} />
      </div>
    ) : (
      <>
      <div
        className="c-dock__app js-dock__app"
        data-application-name="Calculator"
        onClick={toggleMinimized}
      >
        <img className="c-dock__icon js-dock__icon" src={icon} />
      </div>
      <Window>
        <div className="c-calculator">
          <div className="c-calculator__screen">
            <div data-previous-operand className="c-screen__previous">
              {updateDisplay()}
            </div>
            <div data-current-operand className="c-screen__current">
              {getDisplayNumber(currentOperand)}
            </div>
          </div>
          <button className="c-calculator__btn c-span--two" onClick={handleAllClearClick}>AC</button>
          <button className="c-calculator__btn" onClick={handleDeleteClick}>DEL</button>
          <button className="c-calculator__btn" onClick={(e) => handleOperationClick(e)}>÷</button>
          <button className="c-calculator__btn" onClick={(e) => handleNumberClick(e)}>1</button>
          <button className="c-calculator__btn" onClick={(e) => handleNumberClick(e)}>2</button>
          <button className="c-calculator__btn" onClick={(e) => handleNumberClick(e)}>3</button>
          <button className="c-calculator__btn" onClick={(e) => handleOperationClick(e)}>*</button>
          <button className="c-calculator__btn" onClick={(e) => handleNumberClick(e)}>4</button>
          <button className="c-calculator__btn" onClick={(e) => handleNumberClick(e)}>5</button>
          <button className="c-calculator__btn" onClick={(e) => handleNumberClick(e)}>6</button>
          <button className="c-calculator__btn" onClick={(e) => handleOperationClick(e)}>-</button>
          <button className="c-calculator__btn" onClick={(e) => handleNumberClick(e)}>7</button>
          <button className="c-calculator__btn" onClick={(e) => handleNumberClick(e)}>8</button>
          <button className="c-calculator__btn" onClick={(e) => handleNumberClick(e)}>9</button>
          <button className="c-calculator__btn" onClick={(e) => handleOperationClick(e)}>+</button>
          <button className="c-calculator__btn" onClick={(e) => handleNumberClick(e)}>0</button>
          <button className="c-calculator__btn" onClick={(e) => handleNumberClick(e)}>.</button>
          <button className="c-calculator__btn c-span--two c-calculator__btn--equals" onClick={handleEqualsClick}>=</button>
        </div>
      </Window>
      </>
    )}
    </>
  );
};

export default Calculator;