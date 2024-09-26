import blogs from "@/data/blogs";
import Image from "next/image";

import Container from "./Container";
import ContainerHeader from "./ContainerHeader";

// ----------------------------------------------------------------------
const AllBlogs = () => {
  return (
    <Container>
      <ContainerHeader
        title="Our Blogs"
        subtitle="Get informed about latest trends"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.slice(0, 9).map((blog) => (
          <div
            key={blog.id}
            className="relativ rounded-lg shadow-md overflow-hidden h-[450px]"
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
              <p className="mt-2 flex-grow">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AllBlogs;
