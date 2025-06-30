import { notFound } from "next/navigation";
import { post } from "../page";
import { Metadata } from "next";

interface PostDetailsProps {
  params: Promise<{
    postId: number;
  }>;
}
export const metadata: Metadata = {
  title: "Post Details Page",
  description:"simple Post Details Page"
};
export default async function PostDetails({ params }: PostDetailsProps) {
  const { postId } = await params;
  if (isNaN(postId)) {
    notFound();
  }
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const post: post = await response.json();
  return (
    <div>
      PostDetails for {postId} {post.title}
    </div>
  );
}
