'use client'

import { calculatePaginationInfo } from '../utils/calculatePagination'
import { Dispatch, SetStateAction, useEffect } from 'react'
import styles from '../styles/pagination.module.css'

interface PaginationProps {
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  postsPerPage: number
  postsLength: number
}

const Pagination = ({ currentPage, setCurrentPage, postsPerPage, postsLength }: PaginationProps) => {
  const pagesPerSlider = 10
  const totalPages = Array.from({ length: Math.ceil(postsLength / postsPerPage) }, (_, index) => index + 1)
  const { currentSlider, startPage, endPage } = calculatePaginationInfo(currentPage, pagesPerSlider, totalPages)

  useEffect(() => {
    setCurrentPage(startPage)
  }, [currentSlider])

  if (postsLength !== 0) {
    return (
      <div className={styles.paginationWrapper}>
        <button className={styles.paginationButton} disabled={currentSlider === 1} onClick={() => setCurrentPage(startPage - 1)}>
          &lt;
        </button>
        {totalPages.slice(startPage - 1, endPage).map((page) => (
          <button
            className={`${styles.paginationButton} ${currentPage === page ? styles.activeButton : ''}`}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={styles.paginationButton}
          disabled={currentSlider === Math.ceil(totalPages.length / pagesPerSlider)}
          onClick={() => setCurrentPage(endPage + 1)}
        >
          &gt;
        </button>
      </div>
    )
  }

  return <></>
}

export default Pagination
