import Image from "next/image";
import Link from "next/link";

const BannerTwo = ({ backgroundImage, topImage, title, subtitle }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between h-[400px] sm:h-[500px] lg:h-[600px] mb-8 md:mb-12 lg:mb-20 px-4 sm:px-8 lg:px-16">
      {/* Left Side: Images */}
      <div className="relative w-1/2 h-[300px] sm:h-[400px] lg:h-[500px]">
        {/* Background Image */}
        <Image
          src={backgroundImage || "/images/banner/banner-background.webp"}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="brightness-90 rounded-lg"
        />
        {/* Top Image */}
        <div className="absolute top-20 right-10 w-2/3 h-2/3 md:w-1/2 md:h-1/2">
          <Image
            src={topImage || "/images/banner/banner.jpg"}
            alt="Top Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Side: Text and Button */}
      <div className="w-full md:w-1/2 flex flex-col items-start md:pl-8 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          {title || "Explore Our World"}
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          {subtitle || "Discover insightful articles on skincare, beauty tips, and more."}
        </p>
          <Link href="/blogs" className="inline-block px-6 py-2 rounded-full font-medium text-lg transition duration-300 hover:bg-blue-500">
            Explore
          </Link>
      </div>
    </div>
  );
};

export default BannerTwo;
