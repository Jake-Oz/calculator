const Display = ({
  displayValue,
  className,
}: {
  displayValue: string;
  className: string;
}) => {
  return (
    <div
      className={`${className} w-full h-[125px] rounded-xl flex justify-end items-center p-10 font-bold text-6xl`}
    >
      <p>{displayValue}</p>
    </div>
  );
};

export default Display;
