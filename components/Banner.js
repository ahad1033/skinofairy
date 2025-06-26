import Image from "next/image";

const Banner = ({ image, title }) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] mb-8 md:mb-12 lg:mb-20">
      <Image
        src={image ? image : "/images/banner/blog-cover.webp"}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="brightness-75"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
