import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

import { fDate } from "@/lib/fDate";
import { Button } from "@/components/ui/button";

import { getAllPosts, getPostData } from "@/lib/mock_blogs";

import Container from "@/components/Container";
import ContainerHeader from "@/components/ContainerHeader";

// ----------------------------------------------------------------------
// Checks if it's the first blog to use a special layout
const isFirstBlog = (index) => {
  return index === 0;
};

// ----------------------------------------------------------------------

const BlogsPage = async () => {
  const allPostsData = await getAllPosts();
  const single = await getPostData("blog-one");

  return (
    <Container className="max-w-screen-lg">
      <ContainerHeader
        title="Our Blogs"
        subtitle="Get informed about the latest trends"
      />

      {/* <div className="mx-auto">
        <div
          className="prose prose-lg mx-auto dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: single.contentHtml }}
        />
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {allPostsData.reverse().map((blog, index) => (
          <div
            key={blog.id}
            className={`flex flex-col gap-4 cursor-pointer ${
              isFirstBlog(index) ? "lg:col-span-2" : "lg:col-span-1"
            }`}
          >
            {/* Image Section */}
            <div className="relative rounded-md aspect-video overflow-hidden">
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

            {/* Blog Content */}
            <div className="flex flex-col gap-2">
              <h3
                className={`tracking-tight ${
                  isFirstBlog(index)
                    ? "text-4xl"
                    : "text-xl md:text-2xl lg:text-2xl"
                }`}
              >
                {blog.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <div className="border-l border-gray-400 h-7 mr-2"></div>
                <p>
                  By {blog.author} on {fDate(blog.date)}
                </p>
              </div>

              <p className="text-muted-foreground text-sm md:text-base lg:text-base line-clamp-3">
                {blog.summary}
              </p>

              {/* <div className="mt-4 gap-4 flex-grow">
                <Button>
                  Read More <MoveRight className="ms-2 w-4 h-4" />
                </Button>
              </div> */}

              <div className="mt-4 gap-4 flex-grow">
                <Link href={`/blog/${blog.id}`}>
                  <Button>
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

export default BlogsPage;
