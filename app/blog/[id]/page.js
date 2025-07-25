import Container from "@/components/Container";
import { getAllPostIds, getPostData } from "@/lib/mock_blogs";

// Use `generateMetadata` to fetch dynamic metadata for each blog post
export async function generateMetadata({ params }) {
  const postData = await getPostData(params?.id);
  const canonicalUrl = `https://www.skinofairy.com/blog/${params?.id}`;

  return {
    title: postData.title,
    description: postData.summary,
    openGraph: {
      title: postData.title,
      description: postData.summary,
      images: postData.image,
      url: canonicalUrl,
      images: [
        {
          url: postData.image,
          width: 800,
          height: 600,
          alt: postData.title,
        },
      ],
    },
    twitter: {
      title: postData.title,
      description: postData.summary,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// Use `generateStaticParams` to specify which posts to pre-render at build time
export async function generateStaticParams() {
  const postIds = await getAllPostIds();
  return postIds;
}

const BlogDetails = async ({ params }) => {
  const postData = await getPostData(params?.id);

  return (
    <Container className="max-w-screen-2xl">
      <div className="mx-auto">
        <div
          className="prose prose-2xl mx-auto dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </Container>
  );
};

export default BlogDetails;
