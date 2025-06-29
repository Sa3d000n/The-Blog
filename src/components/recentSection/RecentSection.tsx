import React from "react";
import Post from "../Post/Post";
import { post } from "@/app/page";

interface RecentSectionProps {
  recentPosts: post[];
}

export default function RecentSection({ recentPosts }: RecentSectionProps) {
  return (
    <div className="py-16">
      <h2 className="text-2xl font-bold mb-7">Recent blog posts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2  md:grid-rows-6 lg:grid-rows-3 gap-8 ">
        {recentPosts.map((post, i) => (
          <Post id={i + 1} post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
