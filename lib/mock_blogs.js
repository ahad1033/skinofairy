import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "/data/blogs");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get the blog post id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as a string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Return the post data including id and metadata
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);

//   // Returns an array of blog file names as { params: { id: filename } }
//   return fileNames.map((fileName) => ({
//     params: {
//       id: fileName.replace(/\.md$/, ''),
//     },
//   }));
// }

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array of blog file names as { id: filename }
  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ""),
  }));
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse the post metadata and content using gray-matter
  const matterResult = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
