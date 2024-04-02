'use client';

import Link from 'next/link';
import styles from '@/styles/postList.module.css';
import { useState } from 'react';
import Pagination from './Pagination';
import { getPageRange } from '@/utils/calculatePagination';
import Image from 'next/image';
import dateFormatter from '@/utils/dateFormatter';
import { PostResponseType } from '@/types/post';

// export default function PostList({ posts }: PostListType) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 10;
//   const currentPagePosts = getPageRange(posts, currentPage, postsPerPage);

//   return (
//     <div className={styles.postList}>
//       {currentPagePosts?.map((post: any) => (
//         <Link href={`blog/${post.header.id}`} className={styles.postItem} key={post.header.id}>
//           <p className={styles.postTitle}>{post.header.title}</p>
//           <p className={styles.postCotent} dangerouslySetInnerHTML={{ __html: post.content }} />
//           <p className={styles.postDate}>{post.header.date}</p>
//         </Link>
//       ))}
//       <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} postsPerPage={postsPerPage} postsLength={posts.length} />
//     </div>
//   );
// }

interface PostListProps {
  posts: PostResponseType[] | undefined;
}

export default function PostList({ posts }: PostListProps) {
  if (posts && posts.length !== 0) {
    return (
      <div className={styles.postList}>
        {posts.map((post: PostResponseType) => (
          <Link href={`/blog/detail/${post.postId}`} className={styles.postItem} key={post.postId}>
            <div className={styles.imageWrapper}>{post.imageUrl && <Image src={post.imageUrl} alt="" fill sizes="auto" />}</div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>{post.title}</p>
              <p className={styles.content}>{post.content}</p>
              <div className={styles.date}>
                {dateFormatter(post.date, '년월일')}
                {/* · 45개의 댓글 */}
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.footerLeft}>
                <Image className={styles.image} src="/images/profile.jpeg" alt="" width={25} height={25} />
                <p>
                  <span>by</span> {post.author}
                </p>
              </div>
              <div className={styles.footerRight}>
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z"></path>
                </svg>
                <p>{post.likeCount}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return <></>;
}
