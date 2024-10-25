export default function robots() {
  return new Response(
    `User-agent: *
  Allow: /
  
  Sitemap: https://skinofairy.com/sitemap.xml
  `,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
