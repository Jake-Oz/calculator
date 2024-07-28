const Display = ({
  displayValue,
  className,
}: {
  displayValue: string;
  className: string;
}) => {
  if (displayValue.length > 21) {
    displayValue = "Number exceeds calculator limit";
  }
  return (
    <div
      className={`${className} w-full sm:h-[125px] h-[85px] rounded-xl flex justify-end items-center p-10 font-bold `}
    >
      <p
        className={`${
          displayValue.length > 18
            ? "sm:text-4xl text-2xl"
            : displayValue.length > 12
            ? "sm:text-5xl text-3xl"
            : "sm:text-6xl text-4xl"
        } `}
      >
        {displayValue}
      </p>
    </div>
  );
};

export default Display;
