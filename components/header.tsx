import React from "react";
import Toggle from "./threewaytoggle";

type HeaderProps = {
  theme: string;
  switchTheme: (theme: string) => void;
};

const Header = ({ theme, switchTheme }: HeaderProps) => {
  return (
    <div
      className={`flex justify-between items-end ${
        theme === "theme1"
          ? "text-textwhite"
          : theme === "theme2"
          ? "text-text"
          : "text-textyellow"
      } mb-4`}
    >
      <h3 className="text-4xl">calc</h3>
      <div className="flex justify-center items-end gap-[15%] ">
        <h3 className="tracking-widest">THEME</h3>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-center px-4 text-lg">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <Toggle theme={theme} switchTheme={switchTheme} />
        </div>
      </div>
    </div>
  );
};

export default Header;
