import Link from 'next/link';
import styles from '@/styles/logo.module.css';

export default function Logo() {
  return (
    <Link href="/" className={`${styles.logo} novaSquare-font`}>
      Geunu
    </Link>
  );
}
