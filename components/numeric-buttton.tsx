"use client";
import React from "react";
import { motion } from "framer-motion";

const NumberButton = ({
  number,
  handleClick,
  className,
}: {
  number: string;
  handleClick: (input?: string) => void;
  className?: string;
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => handleClick(number)}
      className={`${className} flex justify-center items-center pt-2 min-w-[50px] h-[60px] text-4xl font-bold text-blue-700 rounded-xl  shadow-[0_5px_0px_0px_rgba(0,0,0,0.3)] `}
    >
      {number}
    </motion.button>
  );
};

export default NumberButton;
