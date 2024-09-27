"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Container from "./Container";

// Fake categories data
const fakeCategories = [
  { id: 1, categoryName: "Fashion", image: "/images/blog.jpg" },
  { id: 2, categoryName: "Electronics", image: "/images/blog.jpg" },
  { id: 3, categoryName: "Home & Living", image: "/images/blog.jpg.jpg" },
  { id: 4, categoryName: "Beauty & Health", image: "/images/blog.jpg.jpg" },
  { id: 5, categoryName: "Sports", image: "/images/blog.jpg" },
  { id: 6, categoryName: "Books", image: "/images/blog.jpg" },
  { id: 7, categoryName: "Toys", image: "/images/blog.jpg" },
  { id: 8, categoryName: "Groceries", image: "/images/blog.jpg" },
];

const Categories = () => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 1500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Container>
      <div className="grid grid-cols-5 gap-10 items-center">
        <h3 className="text-md md:text-xl lg:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
          Categories
        </h3>
        <div className="relative w-full col-span-4">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {fakeCategories.concat(fakeCategories).map((category) => (
                <CarouselItem
                  className="basis-1/4 lg:basis-1/6"
                  key={category.id}
                >
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                    <Image
                      src={category.image}
                      alt={category.categoryName}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                    <span className="text-sm">{category.categoryName}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default Categories;
