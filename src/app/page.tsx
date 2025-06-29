import AllBlogsSection from "@/components/AllBlogsSection/AllBlogsSection";
import RecentSection from "@/components/recentSection/RecentSection";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  const recentPosts = posts.slice();
  return (
    <>
      <p className="text-7xl  md:text-[160px] lg:text-[243px] uppercase text-center font-bold border-y-2 border-gray-300 py-4">
        The blog
      </p>
      <main className="px-8">
        <RecentSection />
        <AllBlogsSection />
      </main>
    </>
  );
}
