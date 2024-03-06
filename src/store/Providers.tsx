"use client";

import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setTasks } from "./taskManager/taskManagerSlice";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  useEffect(() => {
    const tasksFromStorage = JSON.parse(localStorage.getItem("tasks") ?? "[]");
    store.dispatch(setTasks(tasksFromStorage));
  }, []);
  return <Provider store={store}>{children}</Provider>;
};
