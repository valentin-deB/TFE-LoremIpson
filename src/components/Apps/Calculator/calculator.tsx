import React, { useState, useEffect, useRef } from "react";
import "./Calculator.scss";

// import { useWindow } from "../../../hooks/useWindow";

interface CalculatorProps {
  windowId: string;
  currentStyle: string;
}

const Calculator: React.FC<CalculatorProps> = ({
  windowId,
  currentStyle,
}) => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState<string | undefined>(undefined);

  const numbersBtn = useRef<NodeListOf<HTMLButtonElement> | null>(null);
  const operationBtn = useRef<NodeListOf<HTMLButtonElement> | null>(null);
  const equalsBtn = useRef<HTMLButtonElement | null>(null);
  const deleteBtn = useRef<HTMLButtonElement | null>(null);
  const allClearBtn = useRef<HTMLButtonElement | null>(null);
  const previousOperandText = useRef<HTMLDivElement | null>(null);
  const currentOperandText = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    numbersBtn.current = document.querySelectorAll("[data-number]");
    operationBtn.current = document.querySelectorAll("[data-operation]");
    equalsBtn.current = document.querySelector("[data-equals]");
    deleteBtn.current = document.querySelector("[data-delete]");
    allClearBtn.current = document.querySelector("[data-all-clear]");
    previousOperandText.current = document.querySelector(
      "[data-previous-operand]"
    );
    currentOperandText.current = document.querySelector(
      "[data-current-operand]"
    );

    addContentInteractivity();
  }, []);

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
    if (currentOperandText.current) {
      currentOperandText.current.innerText = getDisplayNumber(currentOperand);
    }
    if (previousOperandText.current) {
      if (operation != null) {
        previousOperandText.current.innerText = `${getDisplayNumber(
          previousOperand
        )} ${operation}`;
      } else {
        previousOperandText.current.innerText = "";
      }
    }
  };

  const addContentInteractivity = () => {
    numbersBtn.current?.forEach((button) => {
      button.addEventListener("click", () => {
        appendNumber(button.innerText);
        updateDisplay();
      });
    });

    operationBtn.current?.forEach((button) => {
      button.addEventListener("click", () => {
        chooseOperation(button.innerText);
        updateDisplay();
      });
    });

    equalsBtn.current?.addEventListener("click", () => {
      compute();
      updateDisplay();
    });

    allClearBtn.current?.addEventListener("click", () => {
      clear();
      updateDisplay();
    });

    deleteBtn.current?.addEventListener("click", () => {
      deleteCharacter();
      updateDisplay();
    });
  };

  const toggleMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {isMinimized ? (
        <div
          className="c-dock__app js-dock__app"
          data-application-name="Calculator"
          onClick={toggleMinimized}
        >
          <img
            className="c-dock__icon js-dock__icon"
            src={`assets/${currentStyle}/dockIcons/calculator.png`}
          />
        </div>
      ) : (
        <div className="c-calculator">
          <div className="c-calculator__screen">
            <div data-previous-operand className="c-screen__previous"></div>
            <div data-current-operand className="c-screen__current"></div>
          </div>
          <button data-all-clear className="c-calculator__btn c-span--two">
            AC
          </button>
          <button data-delete className="c-calculator__btn">
            DEL
          </button>
          <button data-operation className="c-calculator__btn">
            ÷
          </button>
          <button data-number className="c-calculator__btn">
            1
          </button>
          <button data-number className="c-calculator__btn">
            2
          </button>
          <button data-number className="c-calculator__btn">
            3
          </button>
          <button data-operation className="c-calculator__btn">
            *
          </button>
          <button data-number className="c-calculator__btn">
            4
          </button>
          <button data-number className="c-calculator__btn">
            5
          </button>
          <button data-number className="c-calculator__btn">
            6
          </button>
          <button data-operation className="c-calculator__btn">
            +
          </button>
          <button data-number className="c-calculator__btn">
            7
          </button>
          <button data-number className="c-calculator__btn">
            8
          </button>
          <button data-number className="c-calculator__btn">
            9
          </button>
          <button data-operation className="c-calculator__btn">
            -
          </button>
          <button data-number className="c-calculator__btn">
            .
          </button>
          <button data-number className="c-calculator__btn">
            0
          </button>
          <button
            data-equals
            className="c-calculator__btn c-span--two c-calculator__btn--equals"
          >
            =
          </button>
        </div>
      )}
    </>
  );
};

export default Calculator;