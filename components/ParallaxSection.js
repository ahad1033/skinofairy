"use client";

import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function ParallaxSection() {
  return (
    <ParallaxProvider>
      <section
        className="relative h-[70vh] md:h-[70vh] flex items-center justify-center text-center py-10"
        style={{
          backgroundImage: "url('/images/banner/parallax-banner.webp')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#000",
        }}
      >
        <Parallax className="absolute top-0 left-0 right-0" speed={-10}>
          <h1 className="text-5xl font-bold pt-32 md:pt-48 text-white">
            Expert Skincare Insights
          </h1>
        </Parallax>
        <Parallax className="absolute bottom-0 left-0 right-0" speed={10}>
          <p className="text-xl mt-4 max-w-2xl mx-auto pb-32 md:pb-48 text-white">
            Your trusted source for expert skincare tips, personalized beauty
            advice, and nourishing solutions for achieving radiant and healthy
            skin.
          </p>
        </Parallax>
      </section>
    </ParallaxProvider>
  );
}
