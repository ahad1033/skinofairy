import { getAllPosts } from "@/lib/mock_blogs";

export default async function sitemap() {
  const staticUrls = [
    {
      url: "https://www.skinofairy.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.skinofairy.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.skinofairy.com/blogs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  // Dynamic blog pages
  const blogPosts = getAllPosts();
  const blogUrls = blogPosts?.map((post) => ({
    url: `https://www.skinofairy.com/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}
