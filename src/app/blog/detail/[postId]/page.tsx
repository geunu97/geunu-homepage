import { getBlogPost } from '@/api/blogPost';
import PostDetail from '@/components/PostDetail';

/* 이 페이지를 강제로 동적 컴포넌트로 처리 
* 서버 컴포넌트는 기본적으로 SSG설정되어 있기 때문
* firebase를 사용할 경우, fetch에서 no cache 옵션을 지정할 수 없기 때문
*/
export const dynamic = 'force-dynamic';

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
