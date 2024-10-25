import { getAllPostIds } from "@/lib/mock_blogs";

export default async function sitemap() {
  // Define your static pages
  const staticUrls = [
    { url: "/", priority: 1.0 },
    { url: "/blogs", priority: 0.8 },
    { url: "/contact", priority: 0.5 },
  ];

  // Fetch dynamic pages (e.g., blog posts)
  const blogPosts = await getAllPostIds();

  // Generate URLs for the sitemap
  const urls = [
    ...staticUrls,
    ...blogPosts.map((post) => ({
      url: `/blog/${post.id}`,
      priority: 0.7,
    })),
  ];

  // Format the sitemap as XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        ({ url, priority }) => `
        <url>
          <loc>https://skinofairy.com${url}</loc>
          <changefreq>weekly</changefreq>
          <priority>${priority}</priority>
        </url>`
      )
      .join("")}
  </urlset>`;

  // Return the sitemap
  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
