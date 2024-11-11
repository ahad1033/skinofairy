import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { fDate } from "@/lib/fDate";
import { getAllPosts } from "@/lib/mock_blogs";
import ContainerHeader from "./ContainerHeader";

// ----------------------------------------------------------------------
const YouMayLike = async () => {
  const allPostsData = await getAllPosts();

  return (
    <Container>
      <ContainerHeader
        title="You May Like"
        subtitle="Discover More Engaging Content"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
        {allPostsData
          ?.reverse()
          ?.slice(2, 6)
          ?.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 hover:opacity-75 cursor-pointer"
            >
              <div className="relative bg-muted rounded-md aspect-video mb-0 md:mb-2 lg:mb-2 overflow-hidden">
                <Link href={`/blog/${blog.id}`}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>

              <div className="flex flex-col flex-grow justify-between">
                <div className="mb-1 md:mb-2">
                  <h3 className="text-md md:text-lg lg:text-lg font-bold leading-snug line-clamp-2">
                    <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h3>
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <div className="border-l border-gray-400 h-7 mr-2"></div>
                  <p className="text-xs md:text-sm lg:text-base">
                    By <span className="font-bold">{blog.author}</span> on{" "}
                    <span className="font-bold">{fDate(blog.date)}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default YouMayLike;
