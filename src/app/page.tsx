import ComponentLoader from "@/components/ComponentLoader/ComponentLoader";
import RecentAndAllPostsComponent from "@/components/RecentAndAllPostsComponent/RecentAndAllPostsComponent";
import { Suspense } from "react";

export interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  return (
    <>
      <p className="text-7xl  md:text-[160px] lg:text-[243px] uppercase text-center font-bold border-y-2 border-gray-300  text-primary py-4 dark:text-primary">
        The blog
      </p>
      <main className="px-8">
        <Suspense fallback={<ComponentLoader />}>
          <RecentAndAllPostsComponent />
        </Suspense>
      </main>
    </>
  );
}
