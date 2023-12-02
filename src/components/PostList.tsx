'use client';

import Link from 'next/link';
import styles from '../styles/postList.module.css';
import { PostListType } from '../types/post';
import { useState } from 'react';
import Pagination from './Pagination';
import { getPageRange } from '@/utils/calculatePagination';
import Image from 'next/image';

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

export default function PostList() {
  const items = [
    {
      title: '개발자 부부가 되고 싶어서 여자친구를 개발하고',
      content:
        '개발자 부부는 어떻게 살아깔까? 개발자 부부가 되고 싶어서 여자친구를 개발자고 만들고, 그것을 통해 바라본 개발자라는 직업에 대한 생각을 나눴다',
      date: '2023년 11월 20일',
      commentCount: 45,
      author: 'geunu',
      likeCount: 176,
    },
  ];

  return (
    <div className={styles.postList}>
      <div className={styles.postItem}>
        <Image className={styles.image} src="/images/example1.png" alt="" width={320} height={170} />
        <div className={styles.contentWrapper}>
          <p className={styles.title}>개발자 부부는 어떻게 살아갈까?개발자 부부는 어떻게 살아갈까?</p>
          <p className={styles.content}>
            '개발자 부부는 어떻게 살아깔까? 개발자 부부가 되고 싶어서 여자친구를 개발자고 만들고, 그것을 통해 바라본 개발자라는 직업에 대한
            생각을 나눴다',생각을 나눴다',생각을 나눴다',
          </p>
          <div className={styles.date}>2023년 11월 20일 · 45개의 댓글</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <Image className={styles.image} src="/images/example1.png" alt="" width={25} height={25} />
            <p>
              <span>by</span> geunu
            </p>
          </div>
          <div className={styles.footerRight}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z"></path>
            </svg>
            <p>186</p>
          </div>
        </div>
      </div>
      <div className={styles.postItem}>
        <Image className={styles.image} src="/images/example1.png" alt="" width={320} height={170} />
        <div className={styles.contentWrapper}>
          <p className={styles.title}>개발자 부부는 어떻게 살아갈까?개발자 부부는 어떻게 살아갈까?</p>
          <p className={styles.content}>
            '개발자 부부는 어떻게 살아깔까? 개발자 부부가 되고 싶어서 여자친구를 개발자고 만들고, 그것을 통해 바라본 개발자라는 직업에 대한
            생각을 나눴다',생각을 나눴다',생각을 나눴다',
          </p>
          <div className={styles.date}>2023년 11월 20일 · 45개의 댓글</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <Image className={styles.image} src="/images/example1.png" alt="" width={25} height={25} />
            <p>
              <span>by</span> geunu
            </p>
          </div>
          <div className={styles.footerRight}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z"></path>
            </svg>
            <p>186</p>
          </div>
        </div>
      </div>
      <div className={styles.postItem}>
        <Image className={styles.image} src="/images/example1.png" alt="" width={320} height={170} />
        <div className={styles.contentWrapper}>
          <p className={styles.title}>개발자 부부는 어떻게 살아갈까?개발자 부부는 어떻게 살아갈까?</p>
          <p className={styles.content}>
            '개발자 부부는 어떻게 살아깔까? 개발자 부부가 되고 싶어서 여자친구를 개발자고 만들고, 그것을 통해 바라본 개발자라는 직업에 대한
            생각을 나눴다',생각을 나눴다',생각을 나눴다',
          </p>
          <div className={styles.date}>2023년 11월 20일 · 45개의 댓글</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <Image className={styles.image} src="/images/example1.png" alt="" width={25} height={25} />
            <p>
              <span>by</span> geunu
            </p>
          </div>
          <div className={styles.footerRight}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z"></path>
            </svg>
            <p>186</p>
          </div>
        </div>
      </div>
      <div className={styles.postItem}>
        <Image className={styles.image} src="/images/example1.png" alt="" width={320} height={170} />
        <div className={styles.contentWrapper}>
          <p className={styles.title}>개발자 부부는 어떻게 살아갈까?개발자 부부는 어떻게 살아갈까?</p>
          <p className={styles.content}>
            '개발자 부부는 어떻게 살아깔까? 개발자 부부가 되고 싶어서 여자친구를 개발자고 만들고, 그것을 통해 바라본 개발자라는 직업에 대한
            생각을 나눴다',생각을 나눴다',생각을 나눴다',
          </p>
          <div className={styles.date}>2023년 11월 20일 · 45개의 댓글</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <Image className={styles.image} src="/images/example1.png" alt="" width={25} height={25} />
            <p>
              <span>by</span> geunu
            </p>
          </div>
          <div className={styles.footerRight}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z"></path>
            </svg>
            <p>186</p>
          </div>
        </div>
      </div>
      <div className={styles.postItem}>
        <Image className={styles.image} src="/images/example1.png" alt="" width={320} height={170} />
        <div className={styles.contentWrapper}>
          <p className={styles.title}>개발자 부부는 어떻게 살아갈까?개발자 부부는 어떻게 살아갈까?</p>
          <p className={styles.content}>
            '개발자 부부는 어떻게 살아깔까? 개발자 부부가 되고 싶어서 여자친구를 개발자고 만들고, 그것을 통해 바라본 개발자라는 직업에 대한
            생각을 나눴다',생각을 나눴다',생각을 나눴다',
          </p>
          <div className={styles.date}>2023년 11월 20일 · 45개의 댓글</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <Image className={styles.image} src="/images/example1.png" alt="" width={25} height={25} />
            <p>
              <span>by</span> geunu
            </p>
          </div>
          <div className={styles.footerRight}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z"></path>
            </svg>
            <p>186</p>
          </div>
        </div>
      </div>
      <div className={styles.postItem}>
        <Image className={styles.image} src="/images/example1.png" alt="" width={320} height={170} />
        <div className={styles.contentWrapper}>
          <p className={styles.title}>개발자 부부는 어떻게 살아갈까?개발자 부부는 어떻게 살아갈까?</p>
          <p className={styles.content}>
            '개발자 부부는 어떻게 살아깔까? 개발자 부부가 되고 싶어서 여자친구를 개발자고 만들고, 그것을 통해 바라본 개발자라는 직업에 대한
            생각을 나눴다',생각을 나눴다',생각을 나눴다',
          </p>
          <div className={styles.date}>2023년 11월 20일 · 45개의 댓글</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <Image className={styles.image} src="/images/example1.png" alt="" width={25} height={25} />
            <p>
              <span>by</span> geunu
            </p>
          </div>
          <div className={styles.footerRight}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z"></path>
            </svg>
            <p>186</p>
          </div>
        </div>
      </div>
    </div>
  );
}
