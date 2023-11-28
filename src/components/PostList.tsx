'use client'

import Link from 'next/link'
import styles from '../styles/postList.module.css'
import { PostListType } from '../types/post'
import { useState } from 'react'
import Pagination from './Pagination'
import { getPageRange } from '@/utils/calculatePagination'

export default function PostList({ posts }: PostListType) {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10
  const currentPagePosts = getPageRange(posts, currentPage, postsPerPage)

  return (
    <div className={styles.postList}>
      {currentPagePosts?.map((post: any) => (
        <Link href={`blog/${post.header.id}`} className={styles.postItem} key={post.header.id}>
          <p className={styles.postTitle}>{post.header.title}</p>
          <p className={styles.postCotent} dangerouslySetInnerHTML={{ __html: post.content }} />
          <p className={styles.postDate}>{post.header.date}</p>
        </Link>
      ))}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} postsPerPage={postsPerPage} postsLength={posts.length} />
    </div>
  )
}
