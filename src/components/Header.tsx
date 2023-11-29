import Link from 'next/link'
import styles from '../styles/header.module.css'
import Logo from './Logo'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <Logo />
        </div>
        <ul className={styles.rightWrapper}>
          <li className="exo2-font">
            <Link href="./">Intro</Link>
          </li>
          <li className="exo2-font">
            <Link href="./">Portfolio</Link>
          </li>
          <li className="exo2-font">
            <Link href="./">Link</Link>
          </li>
          <li className="exo2-font">
            <Link href="./">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
