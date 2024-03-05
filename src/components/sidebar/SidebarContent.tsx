import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoReact } from "react-icons/io5";
import { SidebarMenuItems } from "..";
import { IMenuItems } from "@/interfaces";

interface SidebarContentProps {
  menuItems: IMenuItems[];
  isDesktop?: boolean;
}
export const SidebarContent = ({
  menuItems,
  isDesktop,
}: SidebarContentProps) => {
  return (
    <div
      id="menu"
      style={{}}
      className={`${
        isDesktop ? "hidden md:block" : "fixed"
      }  w-full mt-[60px] md:mt-0 md:w-[400px] bg-gray-900 min-h-screen z-10 text-slate-300 left-0 overflow-y-scroll`}
    >
      <div id="logo" className="my-4 px-6">
        <Link
          href={"/dashboard/main"}
          className="flex items-center py-1 cursor-pointer text-lg md:text-2xl font-bold text-white"
        >
          <IoLogoReact />
          <span className="ml-2">Dash</span>
          <span className="text-blue-500">Tech</span>
        </Link>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <Link
          href="/dashboard/main"
          className="inline-flex space-x-2 items-center"
        >
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={50}
              height={50}
              src={"/images/avatar.jpeg"}
              alt="User Avatar"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Jorge Parrado</span>
        </Link>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((menuItem) => (
          <SidebarMenuItems key={menuItem.path} {...menuItem} />
        ))}
      </div>
    </div>
  );
};
