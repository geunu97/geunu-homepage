'use client';

import Image from 'next/image';
import styles from '@/styles/spinnerLoading.module.css';

export default function SpinnerLoading() {
  return (
    <div className={styles.spinnerLoading}>
      <p>잠시만 기다려 주세요.</p>
      <Image src="/images/spinner.gif" width={50} height={50} alt="로딩중" />
    </div>
  );
}
