"use client";

import { IWeather } from "@/interfaces";
import { useAppDispatch, useAppSelector } from "@/store";
import { setCurrentWeather } from "@/store/appState/appStateSlice";
import { useEffect, useState } from "react";

export const useGetWeather = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { currentLocation } = useAppSelector((state) => state.appState);
  const { lat, lon } = currentLocation;

  const headers: RequestInit = {
    method: "GET",
    cache: "no-store",
  };

  const openweatherKey = process.env.NEXT_PUBLIC_OPEN_WEATHER || "";

  const getWeather = async () => {
    try {
      if (lat == "" || lon == "") return;
      setLoading(true);
      const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openweatherKey}&units=metric
          `,
        headers
      ).then((res) => res.json());
      setLoading(false);
      const weather: IWeather = {
        weather: data.weather,
        main: data.main,
        wind: data.wind,
        name: data.name,
      };
      dispatch(setCurrentWeather(weather));
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [currentLocation]);

  return { loading };
};
