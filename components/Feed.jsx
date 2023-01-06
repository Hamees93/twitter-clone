import React from "react";
import { HiSparkles } from "react-icons/hi";
import Input from "./Input";
import profileImage from "../public/images/user.jpg";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Hamees MJM",
      username: "hameesmjm",
      userImage: profileImage,
      img: "https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      text: "text of the tweet!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Hamees MJM",
      username: "hameesmjm",
      userImage: profileImage,
      img: "https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      text: "text of the tweet!",
      timestamp: "3 hours ago",
    },
  ];
  return (
    <div className=" border-l border-r flex-grow min-h-screen">
      <div className="flex justify-between items-center py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center">
          <HiSparkles className="h-5 w-5" />
        </div>
      </div>
      <Input />
      <div>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
