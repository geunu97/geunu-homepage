import fs from "fs";
import path from "path";
import matter from "gray-matter";
import convertMarkdownToHtml from "./convertMarkdownToHtml";
import { PostHeaderType, PostType } from "../types/post";

const getPostDetail = async (fileId: string): Promise<PostType> => {
  const filePath = path.join(process.cwd(), `public/data/blog/${fileId}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const postHeader: PostHeaderType = {
    id: data.id,
    title: data.title,
    date: data.date,
    author: data.author,
  };

  const response = await convertMarkdownToHtml(content);

  return { header: postHeader, content: response.data };
};

export default getPostDetail;
