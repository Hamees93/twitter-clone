import Image from "next/image";
import React from "react";
import {
  HiEmojiHappy,
  HiOutlineEmojiHappy,
  HiOutlinePhotograph,
} from "react-icons/hi";
import profileImage from "../public/images/user.jpg";

const Input = () => {
  return (
    <div className="flex p-3 border-b border-gray-200">
      <div>
        <Image
          src={profileImage}
          width={60}
          height={60}
          className="rounded-full m-2"
        />
      </div>
      <div className="flex-grow flex flex-col divide-y divide-gray-200">
        <textarea
          name="postText"
          id=""
          rows="4"
          placeholder="What's happening?"
          className="border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide text-gray-700"
        ></textarea>
        <div className="flex items-center pt-2.5">
          <HiOutlinePhotograph className="hoverEffect text-2xl text-sky-500 p-1" />
          <HiOutlineEmojiHappy className="hoverEffect text-2xl text-sky-500 p-1" />
          <button className="ml-auto bg-sky-500 rounded-full text-white w-36 h-12 font-bold shadow-md text-lg hover:bg-sky-600">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
