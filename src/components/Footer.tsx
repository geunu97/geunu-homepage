import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="https://github.com/geunu97" target="_blank">
        <Image src="/images/github.png" alt="" width={20} height={20} />
      </Link>
      <Link href="mailto:olo90632951@gmail.com" target="_blank">
        <Image src="/images/email.png" alt="" width={16} height={16} />
      </Link>
      <Link href="https://www.linkedin.com/in/geunu" target="_blank">
        <Image src="/images/linkedin.png" alt="" width={20} height={20} />
      </Link>
    </div>
  );
}
