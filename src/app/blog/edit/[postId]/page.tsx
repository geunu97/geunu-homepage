import { getBlogPost } from '@/api/blogPost';
import BlogForm from '@/components/BlogForm';

interface BlogEditPageProps {
  params: {
    postId: string;
  };
}

export default async function BlogEditPage({ params }: BlogEditPageProps) {
  const post = await getBlogPost(params.postId);

  return (
    <>
      <BlogForm post={post} />
    </>
  );
}
