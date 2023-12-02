'use client';

import Image from 'next/image';
import styles from '../styles/postDetail.module.css';
import { PostType } from '../types/post';
import MarkdownViewer from './MarkdownViewer';

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

export default function PostDetail() {
  return (
    <div className={styles.postDetail}>
      <div className={styles.postHeader}>
        <p className={styles.title}>ㅁㄴㅁasdasdasdadsㅇㅁㄴaasdasdasdsdasdasdasdasdsasdsaㅇㅁㄴㅇ</p>
        <div className={styles.subTitle}>
          <Image src="/images/example1.png" alt="" width={20} height={20} />
          <p className={styles.author}>geunu </p>
          <p className={styles.date}>2023년 12월 2일</p>
        </div>
      </div>
      내용입니담ㄴ아ㅓㅁ니엄ㄴ어ㅏㅓ민ㅇㅁ넝ㄴ미아ㅣㅁㄴㅇ
    </div>
  );
}
