import Image from "next/image";

// ----------------------------------------------------------------------
const Banner = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[60vh] lg:h-[100vh] flex justify-center items-center overflow-hidden">
      <Image
        fill
        priority
        quality={100}
        alt="Blog Banner"
        className="object-cover"
        src="/images/banner/banner.jpg"
      />

      <div className="absolute inset-0 bg-black/50 z-10 flex justify-center items-center">
        <div className="text-center text-white p-4">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-8xl sm:text-3xl mb-5 tracking-normal md:tracking-wide lg:tracking-widest">
            Revitalize Your Journey
          </h1>

          <div className="border-b border-white w-1/2 mx-auto my-4"></div>

          <p className="text-sm md:text-md lg:text-lg">
            Your daily dose of articles, tutorials, and insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
