"use client";

interface SwitchProps {
  isComplete?: boolean;
  handleCheck: () => void;
}

export const Switch = ({ isComplete, handleCheck }: SwitchProps) => {
  return (
    <div className="flex gap-2 items-center">
      <p
        className={`${
          isComplete ? "line-through text-gray-400" : ""
        } font-semibold`}
      >
        To-do
      </p>
      <article
        onClick={handleCheck}
        className={`cursor-pointer flex w-[50px] rounded-full p-1 items-center border border-gray-200 ${
          isComplete && "bg-blue-600"
        }`}
      >
        <div
          className={`w-[20px] h-[22px] rounded-full ${
            isComplete ? "bg-white ml-auto" : "bg-gray-300"
          }`}
        ></div>
      </article>
    </div>
  );
};
