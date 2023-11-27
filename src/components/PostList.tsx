"use client";

import Link from "next/link";
import styles from "../styles/postList.module.css";
import { PostListType } from "../types/post";

export default function PostList({ posts }: PostListType) {
  return (
    <div className={styles.postList}>
      {posts?.map((post: any) => (
        <Link
          href={`blog/${post.header.id}`}
          className={styles.postItem}
          key={post.header.id}
        >
          <p className={styles.postTitle}>{post.header.title}</p>
          <p
            className={styles.postCotent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <p className={styles.postDate}>{post.header.date}</p>
        </Link>
      ))}
    </div>
  );
}
