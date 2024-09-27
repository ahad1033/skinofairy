import AllBlogs from "@/components/Blogs";
import Categories from "@/components/Categories";
import Banner from "@/components/HomeBanner";
import YouMayLike from "@/components/YouMayLike";

// ----------------------------------------------------------------------
export default function Home() {
  return (
    <main>
      <Banner />
      <Categories />
      <AllBlogs />
      <YouMayLike />
    </main>
  );
}
