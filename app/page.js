// import BannerTwo from "@/components/BannerTwo";
import AllBlogs from "@/components/Blogs";
// import Categories from "@/components/Categories";
import Banner from "@/components/HomeBanner";
import ParallaxSection from "@/components/ParallaxSection";
import YouMayLike from "@/components/YouMayLike";

// ----------------------------------------------------------------------
export default function Home() {
  return (
    <main>
      {/* <BannerTwo /> */}
      <Banner />
      {/* <Categories /> */}
      <AllBlogs />
      <ParallaxSection />
      <YouMayLike />
    </main>
  );
}
