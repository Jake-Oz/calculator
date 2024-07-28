"use client";

import Display from "@/components/display";
import NumberButton from "@/components/numeric-buttton";
import { useState, useEffect } from "react";
import { getTheme, changeTheme, convertToNonLocaleString } from "./utils";
import Header from "@/components/header";

export default function Home() {
  const [input, setInput] = useState("0");
  const [expression, setExpression] = useState("");
  const [decimalSelected, setDecimalSelected] = useState(false);
  const [operandSelected, setOperandSelected] = useState(false);
  const [deleteAvailable, setDeleteAvailable] = useState(false);
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const savedTheme = getTheme();
    console.log("Saved theme: ", savedTheme);
    setTheme(savedTheme || "theme1");
  }, []);

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const handleClick = (value?: string) => {
    if (value === "x") value = "*";
    if (value === ".") {
      if (decimalSelected) return;
      setDecimalSelected(true);
    }
    if (value && !isNaN(Number(value)) && input === "0" && value !== ".") {
      setInput(value);
      setExpression(value);
      setDeleteAvailable(true);
      return;
    }
    if (value && ["+", "-", "*", "/"].includes(value)) {
      setDecimalSelected(false);
      setDeleteAvailable(false);
      if (input === "" && value !== "-") return;
      if (containsOperand(expression)) {
        setOperandSelected(true);
        setExpression(handleCalculate() + value);
      } else {
        setExpression(expression + value);
        setOperandSelected(true);
      }
    } else {
      setDeleteAvailable(true);
      if (!operandSelected && value) {
        if (value !== ".") {
          setInput(
            Number(convertToNonLocaleString(input) + value).toLocaleString()
          );
          setExpression(expression + value);
        } else {
          setInput(convertToNonLocaleString(input) + value);
          setExpression(expression + value);
        }
      } else if (value) {
        setInput(convertToNonLocaleString(value));
        setExpression(expression + value);
        setOperandSelected(false);
      }
    }
  };

  const containsOperand = (expression: string) => {
    return ["+", "-", "*", "/"].some((operand) => expression.includes(operand));
  };

  const handleClear = () => {
    setInput("0");
    setExpression("");
    setDecimalSelected(false);
  };

  const handleDelete = () => {
    if (!deleteAvailable) return;
    if (input.length === 1) {
      setInput("0");
      return;
    }
    setInput(input.slice(0, -1).toLocaleString());
    setExpression(expression.slice(0, -1));
  };

  const handleCalculate = () => {
    if (!expression) return;
    try {
      setDeleteAvailable(false);
      const result = Math.round(eval(expression) * 100000) / 100000;
      setInput(result.toLocaleString());
      setExpression(result.toString());
      setDecimalSelected(false);
      return result;
    } catch (error) {
      setInput("Error");
      setExpression("");
    }
  };

  const switchTheme = (theme: string) => {
    setTheme(theme);
  };

  const keynames = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
  ];
  return (
    <main className="flex flex-col gap-4 max-w-[540px] mx-auto mt-5 p-5">
      <Header theme={theme} switchTheme={switchTheme} />
      <Display
        displayValue={input}
        className={`bg-screenbackground ${
          theme === "theme1"
            ? "text-textwhite"
            : "theme3"
            ? "text-textyellow"
            : "text-text"
        }`}
      />
      <div className="bg-keypadbackground w-full h-full rounded-xl flex flex-col justify-center">
        <div className="px-5 py-5 grid grid-cols-4 gap-5">
          {keynames.map((keyname) => (
            <NumberButton
              key={keyname}
              number={keyname}
              handleClick={keyname === "DEL" ? handleDelete : handleClick}
              className={`${
                keyname === "DEL"
                  ? `sm:text-3xl text-2xl bg-keybackground text-textwhite shadow-keyshadow ${
                      theme === "theme3"
                        ? "hover:bg-keylightshadow hover:shadow-keyshadow"
                        : "hover:brightness-125"
                    } `
                  : `bg-keylight shadow-keylightshadow   ${
                      theme === "theme3"
                        ? "text-textyellow hover:brightness-125 "
                        : "text-text hover:bg-textwhite"
                    }`
              } `}
            />
          ))}
        </div>
        <div className="px-5 pb-5 grid grid-cols-2 gap-5">
          <NumberButton
            number="RESET"
            handleClick={handleClear}
            className="bg-keybackground sm:text-3xl text-2xl text-textwhite shadow-keyshadow  hover:brightness-125"
          />
          <NumberButton
            number="="
            handleClick={handleCalculate}
            className={`sm:text-3xl text-2xl ${
              theme === "theme3" ? "text-text" : "text-textwhite"
            } bg-toggle  shadow-toggleshadow hover:brightness-125`}
          />
        </div>
      </div>
    </main>
  );
}
