import getPostList from '../../utils/getPostList';
import dynamic from 'next/dynamic';

const PostList = dynamic(() => import('../../components/PostList'), {
  ssr: false,
});

export default async function Blog() {
  const posts = await getPostList();

  return (
    <>
      <PostList posts={posts} />
    </>
  );
}
