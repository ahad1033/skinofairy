import Head from "next/head";
import Container from "@/components/Container";
import { getPostData } from "@/lib/mock_blogs";

const BlogDetails = async ({ params }) => {
  const postData = await getPostData(params?.id);

  console.log(postData);

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.summary} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.summary} />
        <meta property="og:image" content={postData.image} />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.summary} />
      </Head>

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
