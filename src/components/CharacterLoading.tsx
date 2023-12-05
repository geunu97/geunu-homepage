import Image from 'next/image';
import styles from '@/styles/loading.module.css';

export default function CharacterLoading() {
  return (
    <div className={styles.imageWrapper}>
      <Image src="/images/loading.gif" width={200} height={200} alt="로딩중" />
    </div>
  );
}
