import Link from "next/link";
import Image from "next/image";
import { fDate } from "@/lib/fDate";
import Container from "./Container";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import ContainerHeader from "./ContainerHeader";
import { getAllPosts } from "@/lib/mock_blogs";

// ----------------------------------------------------------------------
const shouldTakeTwoColumns = (index) => {
  return [0, 3, 4, 7, 8].includes(index);
};

// ----------------------------------------------------------------------
const AllBlogs = async () => {
  const allPostsData = await getAllPosts();

  return (
    <Container>
      <ContainerHeader
        title="Our Blogs"
        subtitle="Get informed about latest trends"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {allPostsData
          ?.reverse()
          ?.slice(0, 4)
          .reverse()
          ?.map((blog, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md overflow-hidden h-[420px] md:h-[550px] lg:h-[550px] ${
                shouldTakeTwoColumns(index)
                  ? "col-span-1 md:col-span-2 lg:col-span-2"
                  : "col-span-1 md:col-span-1 lg:col-span-1"
              }`}
            >
              <div className="relative h-40 md:h-72 lg:h-72 overflow-hidden">
                <Link href={`/blog/${blog.id}`}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </Link>
              </div>
              <div className="p-4 flex flex-col h-full">
                <div className="h-auto md:h-20 lg:h-20">
                  <h3 className="text-xl md:text-3xl font-bold mb-2">
                    <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h3>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <div className="border-l border-gray-400 h-7 mr-2"></div>
                  <p>
                    By {blog.author} on {fDate(blog.date)}
                  </p>
                </div>
                <p className="mt-2 sm:text-sm line-clamp-2">{blog.summary}</p>
                <div className="mt-4 gap-4 flex-grow">
                  <Link href={`/blog/${blog.id}`}>
                    <Button variant="outline">
                      Read More <MoveRight className="ms-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default AllBlogs;
