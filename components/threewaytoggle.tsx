"use client";
import { useEffect, useState } from "react";
import { getTheme } from "@/app/utils";

const Toggle = ({ onSetTheme }: { onSetTheme: (newTheme: string) => void }) => {
  const [checked, setChecked] = useState<number>(0);

  useEffect(() => {
    const savedTheme = getTheme();
    if (savedTheme) {
      onSetTheme(savedTheme);
      setChecked(savedTheme === "theme1" ? 0 : savedTheme === "theme2" ? 1 : 2);
    } else {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      if (mql.matches) {
        onSetTheme("theme3");
        setChecked(2);
      } else {
        setChecked(1);
        onSetTheme("theme2");
      }
    }
  }, []);

  const handleClick = () => {
    setChecked((checked + 1) % 3);
    onSetTheme(checked === 0 ? "theme2" : checked === 1 ? "theme3" : "theme1");
  };

  const checkedStyle =
    checked === 1
      ? "transition1"
      : checked === 2
      ? "transition2"
      : "transition3";
  return (
    <label htmlFor="theme" className="relative inline-block w-24 h-8 ">
      <input
        id="theme"
        type="checkbox"
        className={`${checkedStyle} absolute opacity-0 w-0 h-0  duration-75  cursor-pointer top-0 left-0 right-0 bottom-0 border rounded-[34px] bg-togglebackground`}
      />
      <span
        onClick={handleClick}
        className={`${checkedStyle} absolute cursor-pointer top-0 left-0 right-0 bottom-0 border-none rounded-[34px] before:rounded-[50%] bg-togglebackground before:duration-75  before:absolute before:content-[''] before:h-5 before:w-5 before:left-1.5 before:bottom-1.5 before:bg-toggle`}
      ></span>
    </label>
  );
};

export default Toggle;
