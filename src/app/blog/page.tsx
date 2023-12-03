import { getBlogPosts } from '@/api/blogPost';
import PostList from '@/components/PostList';
import Link from 'next/link';
import styles from '@/styles/blogPage.module.css';
import Image from 'next/image';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className={styles.blogPage}>
      <Link href="/blog/register">
        <Image src="/images/add.png" alt="글 작성하기 아이콘" width={20} height={20} />
      </Link>
      <PostList posts={posts} />
    </div>
  );
}
