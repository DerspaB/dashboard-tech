"use client";

import { ILocations } from "@/interfaces";
import { useAppDispatch } from "@/store";
import {
  setCurrentLocation,
  setListofLocations,
} from "@/store/appState/appStateSlice";

interface LocationItemProps {
  location: ILocations;
}

export const LocationItem = ({ location }: LocationItemProps) => {
  const splitName = location.display_name.split(",");
  const name = `${splitName[0]},${splitName[1]},${
    splitName[splitName.length - 1]
  }`;

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setCurrentLocation(location));
    dispatch(setListofLocations([]));
  };
  return (
    <div className="w-full hover:bg-gray-100">
      <article onClick={handleClick} className="w-full p-3 cursor-pointer">
        <p>{name}</p>
      </article>
      <hr />
    </div>
  );
};
