import Link from 'next/link'
import styles from '../styles/blogHeader.module.css'

export default function BlogHeader() {
  return (
    <div className={styles.blogHeader}>
      <div className={styles.wrapper}>
        <Link href="/blog" className={styles.title}>{`Geunu's Blog`}</Link>
        <button>다크모드</button>
      </div>
    </div>
  )
}
