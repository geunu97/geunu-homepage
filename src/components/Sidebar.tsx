import Image from 'next/image';
import styles from '@/styles/sidebar.module.css';

export default function Sidebar() {
  return (
    <button className={styles.sidebar}>
      <Image src="/images/menu.png" alt="사이드바" width={30} height={30} />
    </button>
  );
}
