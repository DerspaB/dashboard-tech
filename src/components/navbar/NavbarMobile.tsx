"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { setShowMobileMenu } from "@/store/appState/appStateSlice";
import { useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";

export const NavbarMobile = () => {
  const dispatch = useAppDispatch();
  const { showMobileMenu } = useAppSelector((state) => state.appState);
  const handleClickMenu = () => {
    dispatch(setShowMobileMenu(!showMobileMenu));
  };
  return (
    <div className="text-white px-3 fixed  top-0 md:hidden bg-[#111827] h-[60px] w-full flex items-center">
      <IoMenuOutline onClick={handleClickMenu} size={30} />
    </div>
  );
};
