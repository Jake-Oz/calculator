"use client";
import { useEffect, useState } from "react";

const Toggle = ({ switchTheme }: { switchTheme: (theme: string) => void }) => {
  const [checked, setChecked] = useState(0);

  useEffect(() => {
    switch (localStorage.getItem("theme")) {
      case "theme1":
        setChecked(0);
        break;
      case "theme2":
        setChecked(1);
        break;
      case "theme3":
        setChecked(2);
        break;
    }
  }, []);

  useEffect(() => {
    switchTheme(checked === 0 ? "theme1" : checked === 1 ? "theme2" : "theme3");
  }),
    [checked];

  const checkedStyle =
    checked === 1
      ? "transition1"
      : checked === 2
      ? "transition2"
      : "transition3";
  return (
    <label className="relative inline-block w-24 h-8 ">
      <input
        type="text"
        className={`${checkedStyle} absolute opacity-0 w-0 h-0 bg-toggle duration-75  cursor-pointer top-0 left-0 right-0 bottom-0 border rounded-[34px] bg-togglebackground`}
      />
      <span
        onClick={() => setChecked((checked + 1) % 3)}
        className={`${checkedStyle} absolute cursor-pointer top-0 left-0 right-0 bottom-0 border-none rounded-[34px] before:rounded-[50%] bg-togglebackground before:duration-75  before:absolute before:content-[''] before:h-5 before:w-5 before:left-1.5 before:bottom-1.5 before:bg-toggle`}
      ></span>
    </label>
  );
};

export default Toggle;
