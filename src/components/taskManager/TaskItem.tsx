"use client";

import { IoTrashOutline } from "react-icons/io5";
import { Switch } from "..";

interface TaskItemProps {
  title: string;
  description: string;
  isComplete: boolean;
  handleComplete: () => void;
  handleDelete: () => void;
}

export const TaskItem = ({
  title,
  description,
  isComplete,
  handleComplete,
  handleDelete,
}: TaskItemProps) => {
  return (
    <div className="gap-3 bg-white rounded-lg flex flex-col items-center px-2 py-3 w-[300px]  h-[200px]">
      <h1 className="text-[20px] font-semibold">{title}</h1>
      <p className="p-2 mt-[10px] w-[250px] overflow-x-auto overflow-y-auto">
        {description}
      </p>
      <article className="flex items-center w-full mt-auto justify-between">
        <Switch isComplete={isComplete} handleCheck={handleComplete} />
        <IoTrashOutline
          onClick={handleDelete}
          size={30}
          className="text-red-600 cursor-pointer"
        />
      </article>
    </div>
  );
};
