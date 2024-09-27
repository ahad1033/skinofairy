import AllBlogs from "@/components/Blogs";
import Banner from "@/components/HomeBanner";
import YouMayLike from "@/components/YouMayLike";

// ----------------------------------------------------------------------
export default function Home() {
  return (
    <main>
      <Banner />
      <AllBlogs />
      <YouMayLike />
    </main>
  );
}
