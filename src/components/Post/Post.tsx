import { post } from "@/app/page";
import Badge from "../Badge/Badge";
import Link from "next/link";
import image1 from "../../../public/post/Image1.jpg";
import image2 from "../../../public/post/Image2.jpg";
import image3 from "../../../public/post/Image3.jpg";
import image4 from "../../../public/post/Image4.jpg";
import image5 from "../../../public/post/Image5.jpg";
import image6 from "../../../public/post/Image6.jpg";
import image7 from "../../../public/post/Image7.jpg";
import image8 from "../../../public/post/Image8.jpg";
import image9 from "../../../public/post/Image9.jpg";
import image10 from "../../../public/post/Image10.jpg";
import Image from "next/image";

interface PostProps {
  id?: number;
  post: post;
  imageNumber: number;
}
function Post({ id = 0, post, imageNumber }: PostProps) {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  const image = images[imageNumber % 10];
  const styleForId: {
    [key: number]: { parent: string; children: string; image: string };
  } = {
    0: { parent: "", children: "", image: "max-h-[240px]" },
    1: {
      parent: "md:row-span-2 lg:row-start-1 lg:col-start-1 lg:row-span-2 ",
      children: "",
      image: "",
    },
    2: {
      parent: "md:row-start-3 lg:row-start-1 lg:col-start-2",
      children: "md:flex md:flex-row",
      image: "lg:w-[320px] ",
    },
    3: {
      parent: "md:row-start-4 lg:row-start-2 lg:col-start-2",
      children: "md:flex md:flex-row",
      image: "lg:w-[320px]",
    },
    4: {
      parent:
        "md:row-span-2 md:row-start-5 lg:row-start-3 lg:col-span-2 lg:row-span-1",
      children: "lg:flex lg:flex-row",
      image: "",
    },
  };
  return (
    <article
      className={`   transition hover:shadow-lg dark:shadow-amber-50 ${styleForId[id].parent} ${styleForId[id].children} w-auto `}
    >
      <Image
        alt=""
        src={image}
        className={`${styleForId[id].image} w-full object-fill  `}
      />

      <div className="bg-white dark:bg-slate-950   p-4 sm:p-6 flex flex-col gap-3">
        <time className="block font-semibold   text-violet-800">
          {" "}
          Sunday , 1 Jan 2023
        </time>

        <Link href={`/${post.id}`}>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex flex-row justify-between gap-6 ">
            {post?.title} <span>&#8599;</span>
          </h3>
        </Link>

        <p className="mt-2 line-clamp-3 leading-relaxed dark:text-neutral-300 text-gray-500">
          {post?.body}
        </p>
        <div>
          <Badge title="Design" />
          <Badge title="Interface" />
        </div>
      </div>
    </article>
  );
}

export default Post;
