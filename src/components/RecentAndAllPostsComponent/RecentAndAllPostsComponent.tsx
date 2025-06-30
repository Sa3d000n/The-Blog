import { post } from "@/app/page";
import AllBlogsSection from "@/components/AllBlogsSection/AllBlogsSection";
import RecentSection from "@/components/recentSection/RecentSection";

export default async function RecentAndAllPostsComponent() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts: post[] = await response.json();
  const recentPosts = posts.slice(0, 4);
  const allPosts = posts.slice(0, 20);

  return (
    <>
      <RecentSection recentPosts={recentPosts} />
      <AllBlogsSection posts={allPosts} />
    </>
  );
}
