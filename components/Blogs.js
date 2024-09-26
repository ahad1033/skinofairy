import Image from "next/image";
import blogs from "@/data/blogs";
import Container from "./Container";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import ContainerHeader from "./ContainerHeader";

// ----------------------------------------------------------------------
const shouldTakeTwoColumns = (index) => {
  return [0, 3, 4, 7, 8].includes(index);
};

// ----------------------------------------------------------------------
const AllBlogs = () => {
  return (
    <Container>
      <ContainerHeader
        title="Our Blogs"
        subtitle="Get informed about latest trends"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {blogs.slice(0, 6).map((blog, index) => (
          <div
            key={blog.id}
            className={`rounded-lg shadow-md overflow-hidden h-[500px] ${
              shouldTakeTwoColumns(index)
                ? "col-span-2 sm:col-span-2"
                : "col-span-1 sm:col-span-1"
            }`}
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <div className="border-l border-gray-400 h-7 mr-2"></div>
                <p>
                  By {blog.author} on{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
              <p className="mt-2 line-clamp-2">{blog.description}</p>
              <div className="mt-4 gap-4 flex-grow">
                <Button variant="outline">
                  Read More <MoveRight className="ms-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AllBlogs;
