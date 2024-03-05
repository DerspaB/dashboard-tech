"use client";
import {
  IoCheckboxOutline,
  IoCloudOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import { NavbarMobile } from "..";
import { IMenuItems } from "@/interfaces";
import { SidebarContent } from "./SidebarContent";
import { useAppSelector } from "@/store";

const menuItems: IMenuItems[] = [
  {
    path: "/dashboard/weather",
    icon: <IoCloudOutline size={40} />,
    title: "Weather",
    subTitle: "Check the current weather",
  },
  {
    path: "/dashboard/news",
    icon: <IoNewspaperOutline size={40} />,
    title: "News",
    subTitle: "News feed",
  },
  {
    path: "/dashboard/tasks",
    icon: <IoCheckboxOutline size={40} />,
    title: "Tasks",
    subTitle: "Task manager",
  },
];

export const Sidebar = () => {
  const { showMobileMenu } = useAppSelector((state) => state.appState);
  return (
    <>
      <NavbarMobile />
      {showMobileMenu && <SidebarContent menuItems={menuItems} />}
      <SidebarContent isDesktop={true} menuItems={menuItems} />
    </>
  );
};
