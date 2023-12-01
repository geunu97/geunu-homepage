import fs from 'fs';
import path from 'path';
import getPostDetail from './getPostDetail';
import { PostType } from '../types/post';

const getPostList = async (): Promise<PostType[]> => {
  const postsDirectory = path.join(process.cwd(), 'public/data/blog');
  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = await Promise.all(
    fileNames.map(async (fileName) => {
      const fileId = fileName.replace(/\.md$/, '');
      return await getPostDetail(fileId);
    }),
  );

  return allPosts;
};

export default getPostList;
