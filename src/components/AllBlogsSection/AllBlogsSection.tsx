import React from "react";
import Post from "../Post/Post";
import { post } from "@/app/page";
interface AllBlogsSectionProps {
  posts: post[];
}
export default function AllBlogsSection({ posts }: AllBlogsSectionProps) {
  return (
    <div className="py-16">
      <h2 className="text-2xl font-bold mb-7">All blog posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8 ">
        {posts.map((post, i) => (
          <Post post={post} key={post.id} imageNumber={i + 1} />
        ))}
      </div>
    </div>
  );
}
