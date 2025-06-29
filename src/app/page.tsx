import AllBlogsSection from "@/components/AllBlogsSection/AllBlogsSection";
import RecentSection from "@/components/recentSection/RecentSection";

export interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
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
      <p className="text-7xl  md:text-[160px] lg:text-[243px] uppercase text-center font-bold border-y-2 border-gray-300 py-4">
        The blog
      </p>
      <main className="px-8">
        <RecentSection recentPosts={recentPosts} />
        <AllBlogsSection posts={allPosts} />
      </main>
    </>
  );
}
