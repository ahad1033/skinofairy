import AllBlogs from "@/components/Blogs";
import Banner from "@/components/HomeBanner";
import YouMayLike from "@/components/YouMayLike";
import ParallaxSection from "@/components/ParallaxSection";

// ----------------------------------------------------------------------
export const metadata = {
  title: "Skinofairy - Your Skincare Guide",
  description:
    "Discover expert advice on skincare, solutions for skin problems, beauty tips, and nourishing foods for radiant, healthy skin at Skinofairy.",
  openGraph: {
    title: "Skinofairy - Your Skincare Guide",
    description:
      "Discover expert advice on skincare, solutions for skin problems, beauty tips, and nourishing foods for radiant, healthy skin at Skinofairy.",
    url: "https://www.skinofairy.com",
    images: [
      {
        url: "/images/og-image.webp",
        width: 800,
        height: 600,
        alt: "Skinofairy - Your Skincare Guide",
      },
    ],
  },
  alternates: {
    canonical: "https://www.skinofairy.com",
  },
};

export default function Home() {
  return (
    <>
      <Banner />

      <AllBlogs />

      <ParallaxSection />

      <YouMayLike />
    </>
  );
}
