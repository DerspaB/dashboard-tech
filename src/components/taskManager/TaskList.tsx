"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { TaskItem } from "..";
import {
  changeStatusTask,
  deleteTask,
} from "@/store/taskManager/taskManagerSlice";

export const TaskList = () => {
  const { tasks } = useAppSelector((state) => state.taskManager);
  const dispatch = useAppDispatch();
  const handleComplete = (idx: number) => {
    dispatch(changeStatusTask(idx));
  };
  const handleDelete = (idx: number) => {
    dispatch(deleteTask(idx));
  };
  return (
    <div className="py-4 mt-[60px] justify-center md:justify-start md:w-[980px] px-2 flex flex-wrap w-full gap-[30px] ">
      {tasks.map((task, idx) => (
        <TaskItem
          {...task}
          handleComplete={() => handleComplete(idx)}
          handleDelete={() => handleDelete(idx)}
        />
      ))}
    </div>
  );
};
