import PostList from '@/components/PostList';

export default function Blog() {
  // const posts = await getPostList();

  return (
    <div
      style={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <PostList />
    </div>
  );
}
