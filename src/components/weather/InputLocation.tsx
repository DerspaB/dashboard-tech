"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { setWeatherInput } from "@/store/appState/appStateSlice";
import { ChangeEvent } from "react";

export const InputLocation = () => {
  const { weatherInput } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setWeatherInput(event.target.value));
  };

  return (
    <div className="flex gap-2 mt-3">
      <input
        onChange={handleChangeValue}
        value={weatherInput}
        className="px-3 rounded-md border"
        type="text"
        placeholder="Search city"
      />
      <button className="bg-blue-500 text-white font-bold px-3 py-2 rounded-md">
        Search
      </button>
    </div>
  );
};
