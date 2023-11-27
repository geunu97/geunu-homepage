"use client";

import styles from "../styles/postDetail.module.css";
import { PostType } from "../types/post";
import MarkdownViewer from "./MarkdownViewer";

export default function PostDetail({ header, content }: PostType) {
  return (
    <div className={styles.postDetail}>
      <div className={styles.postHeader}>
        <p className={styles.postTitle}>{header.title}</p>
        <p className={styles.postAuthor}>{header.author}</p>
        <p className={styles.postDate}>{header.date}</p>
      </div>
      <MarkdownViewer content={content} />
    </div>
  );
}
