import Container from "@/components/Container";
import { getAllPostIds, getPostData } from "@/lib/mock_blogs";

// Use `generateMetadata` to fetch dynamic metadata for each blog post
export async function generateMetadata({ params }) {
  const postData = await getPostData(params?.id);

  return {
    title: postData.title,
    description: postData.summary,
    openGraph: {
      title: postData.title,
      description: postData.summary,
      images: postData.image,
    },
    twitter: {
      title: postData.title,
      description: postData.summary,
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

  console.log(postData);

  return (
    <>
      {/* SEO Metadata */}
      {/* <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.summary} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.summary} />
        <meta property="og:image" content={postData.image} />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.summary} />
      </Head> */}

      <Container className="max-w-screen-2xl">
        <div className="mx-auto">
          <div
            className="prose prose-lg mx-auto dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </Container>
    </>
  );
};

export default BlogDetails;
