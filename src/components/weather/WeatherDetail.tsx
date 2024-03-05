"use client";

import { useGetWeather } from "@/hooks";
import { useAppSelector } from "@/store";

export const WeatherDetail = () => {
  const { loading } = useGetWeather();
  const { currentWeather } = useAppSelector((state) => state.appState);
  return (
    <div
      style={{
        background: "linear-gradient(to right, #6dd5ed, #2193b0)",
        color: "white",
        padding: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      className="flex w-full md:w-[400px]  flex-col items-center justify-center shadow-md rounded-lg"
    >
      {loading && (
        <div className="gap-3 w-full flex flex-col items-center justify-center animate-pulse ">
          <div className="bg-white w-[50%] h-[30px] rounded-full"></div>
          <div className="rounded-full bg-white w-[80%] h-[30px]"></div>
          <div className="bg-white w-[50%] h-[30px] rounded-full"></div>
        </div>
      )}
      {currentWeather.name !== "" && !loading && (
        <>
          <h1 className="text-[30px] font-medium">{currentWeather.name}</h1>
          <p className="text-[40px] font-bold">{`${currentWeather.main.temp.toFixed(
            0
          )}°C`}</p>
          <div className="flex flex-col">
            <p className="font-semibold">
              {currentWeather.weather[0].description}
            </p>
            <article className="flex items-center justify-center gap-2">
              <p>H:{currentWeather.main.temp_max.toFixed(0)}°</p>
              <p>L:{currentWeather.main.temp_min.toFixed(0)}°</p>
            </article>
          </div>
        </>
      )}
    </div>
  );
};
