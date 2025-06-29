import Badge from "../Badge/Badge";
interface PostProps {
  id?: number;
}
function Post({ id = 0 }: PostProps) {
  const styleForId: { [key: number]: { parent: string; children: string } } = {
    0: { parent: "", children: "" },
    1: {
      parent: "md:row-span-2 lg:row-start-1 lg:col-start-1 lg:row-span-2 ",
      children: "",
    },
    2: {
      parent: "md:row-start-3 lg:row-start-1 lg:col-start-2",
      children: "md:flex md:flex-row",
    },
    3: {
      parent: "md:row-start-4 lg:row-start-2 lg:col-start-2",
      children: "md:flex md:flex-row",
    },
    4: {
      parent:
        "md:row-span-2 md:row-start-5 lg:row-start-3 lg:col-span-2 lg:row-span-1",
      children: "lg:flex lg:flex-row",
    },
  };
  return (
    <article
      className={`   transition hover:shadow-lg ${styleForId[id].parent} ${styleForId[id].children} w-auto `}
    >
      <img
        alt=""
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6 flex flex-col gap-3">
        <time className="block font-semibold   text-violet-800">
          {" "}
          Sunday , 1 Jan 2023
        </time>

        <a href="#">
          <h3 className="text-2xl font-semibold text-gray-900 flex flex-row justify-between gap-6 ">
            How to position your furniture for positivity <span>&#8599;</span>
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 leading-relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
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
