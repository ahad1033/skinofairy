"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ----------------------------------------------------------------------
// ANIMATION VARIANT
const variants = {
  heading: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  paragraph: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  },
};

// ----------------------------------------------------------------------
const Banner = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[60vh] lg:h-[100vh] flex justify-center items-center overflow-hidden mb-8 md:mb-12 lg:mb-20">
      <Image
        fill
        priority
        quality={75}
        alt="Blog Banner"
        className="object-cover"
        src="/images/banner/blog-cover.webp"
      />

      <div className="absolute inset-0 bg-black/50 z-10 flex justify-center items-center">
        <div className="text-center text-white p-4">
          <motion.h1
            className="font-bold text-3xl md:text-7xl lg:text-8xl sm:text-3xl mb-5 tracking-normal md:tracking-wide lg:tracking-widest"
            initial="hidden"
            animate="visible"
            variants={variants.heading}
          >
            Revitalize Your Journey
          </motion.h1>

          <div className="border-b border-white w-1/2 mx-auto my-4"></div>

          <motion.p
            className="text-sm md:text-md lg:text-lg"
            initial="hidden"
            animate="visible"
            variants={variants.paragraph}
          >
            Your daily dose of articles, tutorials, and insights.
          </motion.p>
          {/* <p className="text-sm md:text-md lg:text-lg">
            Your daily dose of articles, tutorials, and insights.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
