'use client';

import Image from 'next/image';
import styles from '../styles/postDetail.module.css';
import { PostType } from '../types/post';
import MarkdownViewer from './MarkdownViewer';
import dateFormatter from '@/utils/dateFormatter';

// export default function PostDetail({ header, content }: PostType) {
//   return (
//     <div className={styles.postDetail}>
//       <div className={styles.postHeader}>
//         <p className={styles.postTitle}>{header.title}</p>
//         <p className={styles.postAuthor}>{header.author}</p>
//         <p className={styles.postDate}>{header.date}</p>
//       </div>
//       <MarkdownViewer content={content} />
//     </div>
//   );
// }

export default function PostDetail({ post }: any) {
  return (
    <div className={styles.postDetail}>
      <div className={styles.postHeader}>
        <p className={styles.title}>{post.title}</p>
        <div className={styles.subTitle}>
          <Image src="/images/example1.png" alt="" width={20} height={20} />
          <p className={styles.author}>{post.author} </p>
          <p className={styles.date}>{dateFormatter(post.date)}</p>
        </div>
      </div>
      {post.content}
    </div>
  );
}
