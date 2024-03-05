"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { setListofLocations } from "@/store/appState/appStateSlice";

export const useGetLocations = () => {
  const { weatherInput } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  const headers: RequestInit = {
    method: "GET",
    cache: "no-store",
  };

  const handleFetchLocations = async () => {
    const key = process.env.NEXT_PUBLIC_LOCATION_IQ_KEY || "";
    try {
      const data = await fetch(
        `https://us1.locationiq.com/v1/search?key=${key}&q=${weatherInput}&format=json&limit=5`,
        headers
      ).then((response) => response.json());

      if (data.error) {
        dispatch(setListofLocations([]));
        return;
      }
      dispatch(setListofLocations(data));
    } catch (error) {
      console.log(error);
      dispatch(setListofLocations([]));
    }
  };

  return { handleFetchLocations };
};
