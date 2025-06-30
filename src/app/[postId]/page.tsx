import { notFound } from "next/navigation";
import { post } from "../page";
import { Metadata } from "next";
import image1 from "../../../public/post details/Image1.jpg";
import image2 from "../../../public/post details/Image2.png";
import image3 from "../../../public/post details/Image3.png";
import image4 from "../../../public/post details/Image4.png";
import Image from "next/image";

interface PostDetailsProps {
  params: Promise<{
    postId: number;
  }>;
}
export const metadata: Metadata = {
  title: "Post Details Page",
  description: "simple Post Details Page",
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
    <div className="px-8 m">
      <time className="block font-semibold mb-8  text-violet-800">
        {" "}
        Sunday , 1 Jan 2023
      </time>
      <h1 className="text-4xl mb-8">{post.title}</h1>
      <Image alt="image1" src={image1} className="py-8 mx-auto" />
      <p className="mb-8">{post.body}{post.body}{post.body}{post.body}{post.body}{post.body}</p>
      <Image alt="image2" src={image2} className="py-8 mx-auto" />
      <p className="mb-8">{post.body}{post.body}{post.body}{post.body}{post.body}{post.body}</p>
      <Image alt="image3" src={image3} className="py-8 mx-auto" />
      <p className="mb-8">{post.body}{post.body}{post.body}{post.body}{post.body}{post.body}</p>
      <Image alt="image4" src={image4} className="py-8 mx-auto" />
      <p className="mb-8">{post.body}{post.body}{post.body}{post.body}{post.body}{post.body}</p>
    </div>
  );
}
