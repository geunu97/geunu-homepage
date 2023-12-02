import { getBlogPosts } from '@/api/blogPost';
import PostList from '@/components/PostList';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div
      style={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <PostList posts={posts} />
    </div>
  );
}
