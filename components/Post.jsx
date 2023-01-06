import Image from "next/image";
import React from "react";
import {
  HiDotsHorizontal,
  HiOutlineChartBar,
  HiOutlineChat,
  HiOutlineHeart,
  HiOutlineShare,
  HiOutlineTrash,
} from "react-icons/hi";

const Post = ({ post }) => {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      <div>
        <Image
          src={post.userImage}
          width={60}
          height={60}
          className="rounded-full mr-4"
        />
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex space-x-1 items-center whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.username}-</span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {post.timestamp}
            </span>
          </div>
          <HiDotsHorizontal className="hoverEffect text-2xl" />
        </div>
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.text}
        </p>
        <Image
          src={post.img}
          width={200}
          height={100}
          layout="responsive"
          className="rounded-2xl mr-2"
        />
        <div className="flex justify-between text-gray-500 p-2">
          <HiOutlineChat className="hoverEffect text-4xl " />
          <HiOutlineTrash className="hoverEffect text-4xl " />
          <HiOutlineHeart className="hoverEffect text-4xl " />
          <HiOutlineShare className="hoverEffect text-4xl " />
          <HiOutlineChartBar className="hoverEffect text-4xl " />
        </div>
      </div>
    </div>
  );
};

export default Post;
