import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import {
  HiBookmark,
  HiClipboard,
  HiDotsCircleHorizontal,
  HiDotsHorizontal,
  HiHashtag,
  HiHome,
  HiInbox,
  HiOutlineBell,
  HiOutlineClipboard,
  HiOutlineDotsCircleHorizontal,
  HiOutlineUserCircle,
} from "react-icons/hi";
import profileImage from "../public/images/user.jpg";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start sticky top-0 min-h-screen">
      <div className="p-0 xl:p-1">
        <Image
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt="logo"
          width={50}
          height={50}
        />
      </div>
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem Icon={HiHome} Name="Home" active={true} />
        <SidebarMenuItem Icon={HiHashtag} Name="Explore" />
        <SidebarMenuItem Icon={HiOutlineBell} Name="Notifications" />
        <SidebarMenuItem Icon={HiHome} Name="Home" />
        <SidebarMenuItem Icon={HiInbox} Name="Messages" />
        <SidebarMenuItem Icon={HiBookmark} Name="Bookmarks" />
        <SidebarMenuItem Icon={HiOutlineClipboard} Name="Lists" />
        <SidebarMenuItem Icon={HiOutlineUserCircle} Name="Profile" />
        <SidebarMenuItem Icon={HiOutlineDotsCircleHorizontal} Name="More" />
      </div>
      <button className="bg-sky-500 rounded-full text-white w-56 h-12 font-bold shadow-md text-lg hover:bg-sky-600 hidden xl:inline">
        Tweet
      </button>
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto space-x-2">
        <Image
          src={profileImage}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Hamees MJM</h4>
          <p className="text-gray-500">@hameesmjm</p>
        </div>
        <HiDotsHorizontal className="h-5 hidden xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
