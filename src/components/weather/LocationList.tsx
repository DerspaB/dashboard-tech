"use client";

import { useAppSelector } from "@/store";
import { LocationItem } from "..";

export const LocationList = () => {
  const { listofLocations } = useAppSelector((state) => state.appState);
  return (
    <div className="px mt-[20px]   bg-white shadow-md flex flex-col items-center border rounded-md">
      {listofLocations.map((location, idx) => (
        <LocationItem location={location} key={idx} />
      ))}
    </div>
  );
};
