import { notFound } from "next/navigation";
import { post } from "../page";

interface PostDetailsProps {
  params: Promise<{
    postId: number;
  }>;
}

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
