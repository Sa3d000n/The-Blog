import React from "react";
import Post from "../Post/Post";

export default function RecentSection() {
  return (
    <div className="py-16">
      <h2 className="text-2xl font-bold mb-7">Recent blog posts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2  md:grid-rows-6 lg:grid-rows-3 gap-8 ">
        <Post id={1} />
        <Post id={2} />
        <Post id={3} />
        <Post id={4} />
      </div>
    </div>
  );
}
