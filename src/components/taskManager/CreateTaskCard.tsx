"use client";

import { Itask } from "@/interfaces";
import { useAppDispatch, useAppSelector } from "@/store";
import { setNewTask } from "@/store/taskManager/taskManagerSlice";
import { ChangeEvent, useState } from "react";

export const CreateTaskCard = () => {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.taskManager);
  const [task, setTask] = useState<Itask>({
    title: "",
    description: "",
    isComplete: false,
  });

  const handleInputChange = (event: ChangeEvent<any>) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const createTask = () => {
    dispatch(setNewTask(task));
    setTask({
      title: "",
      description: "",
      isComplete: false,
    });
  };
  return (
    <div className="mt-[30px] p-3 w-full lg:w-[600px] bg-white shadow-md  rounded-lg flex flex-col items-center gap-2 ">
      <input
        value={task.title}
        onChange={handleInputChange}
        name="title"
        placeholder="Add title"
        className="w-full py-2 border-b placeholder:text-black border-b-gray-300 text-[20px] font-medium focus:outline-none focus:border-blue-500 focus:border-b-[2px]"
        type="text"
      />

      <textarea
        value={task.description}
        onChange={handleInputChange}
        name="description"
        className="mt-[10px] w-full placeholder:text-[18px] resize-none font-medium py-2 focus:outline-none border-b  border-b-gray-300 focus:border-blue-500 focus:border-b-[2px]"
        placeholder="Task description"
      />
      <button
        onClick={createTask}
        className="bg-blue-600 mt-[20px] text-white font-semibold rounded-md px-3 py-2"
      >
        Add task
      </button>
    </div>
  );
};
