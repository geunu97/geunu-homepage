import { getBlogPost } from '@/api/blogPost';
import PostDetail from '@/components/PostDetail';

interface BlogProps {
  params: {
    id: string;
  };
}

// export default async function Blog({ params }: BlogProps) {
//   const { header, content } = await getPostDetail(params.id);

//   return <><PostDetail header={header} content={content} /> </>;
// }

export default async function BlogDeatilPage({ params }: BlogProps) {
  const post = await getBlogPost(params.id);

  return (
    <>
      <PostDetail post={post} />
    </>
  );
}
