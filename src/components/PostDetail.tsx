'use client';

import Image from 'next/image';
import styles from '@/styles/postDetail.module.css';
import { PostResponseType } from '@/types/post';
import dateFormatter from '@/utils/dateFormatter';
import Link from 'next/link';
import { deleteBlogPost } from '@/api/blogPost';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const TuiViewer = dynamic(() => import('@/components/TuiViewer'), {
  ssr: false,
});

interface PostDetailProps {
  post?: PostResponseType | undefined;
}

export default function PostDetail({ post }: PostDetailProps) {
  const router = useRouter();

  const onRemove = async () => {
    if (post && window.confirm('정말 삭제하겠습니까?')) {
      const isSuccess = await deleteBlogPost(post.postId);
      if (isSuccess) {
        router.push('/blog');
        router.refresh();
      }
    }
  };

  if (post) {
    return (
      <div className={styles.postDetail}>
        <div className={styles.postHeader}>
          <p className={styles.title}>{post.title}</p>
          <div className={styles.subTitle}>
            <div className={styles.subTitleLeft}>
              <Image src="/images/profile.jpeg" alt="" width={20} height={20} />
              <p className={styles.author}>{post.author} </p>
              <p className={styles.date}>{dateFormatter(post.date, '년월일')}</p>
            </div>
            <div className={styles.subTitleRight}>
              <Link href={`/blog/edit/${post.postId}`}>수정하기</Link>
              <button onClick={onRemove}>삭제하기</button>
            </div>
          </div>
        </div>
        <div className={styles.postContentWrapper}>
          <TuiViewer content={post.content} />
        </div>
      </div>
    );
  }

  return <></>;
}
