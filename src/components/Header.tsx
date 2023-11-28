import styles from '../styles/header.module.css'
import Logo from './Logo'
import Sidebar from './Sidebar'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <Sidebar />
      </div>
    </div>
  )
}
