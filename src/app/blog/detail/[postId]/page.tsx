import { getBlogPost } from '@/api/blogPost';
import PostDetail from '@/components/PostDetail';

interface BlogDetailPageProps {
  params: {
    postId: string;
  };
}

export default async function BlogDeatilPage({ params }: BlogDetailPageProps) {
  const post = await getBlogPost(params.postId);

  return (
    <>
      <PostDetail post={post} />
    </>
  );
}
