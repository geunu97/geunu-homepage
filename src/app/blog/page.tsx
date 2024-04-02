import { getBlogPosts } from '@/api/blogPost';
import PostList from '@/components/PostList';
import Link from 'next/link';
import styles from '@/styles/blogPage.module.css';
import Image from 'next/image';
import AuthGuardRender from '@/components/AuthGuardRender';

/* 이 페이지를 강제로 동적 컴포넌트로 처리 
* 서버 컴포넌트는 기본적으로 SSG설정되어 있기 때문
* firebase를 사용할 경우, fetch에서 no cache 옵션을 지정할 수 없기 때문
*/
export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className={styles.blogPage}>
      <AuthGuardRender>
        <Link href="/blog/register">
          <Image src="/images/add.png" alt="글 작성하기 아이콘" width={20} height={20} />
        </Link>
      </AuthGuardRender>
      <PostList posts={posts} />
    </div>
  );
}
