'use client';

import styles from '@/styles/stretchAnimationEffect.module.css';
import useGetScrollPosition from '@/hooks/useGetScrollPosition';

interface StretchAnimationEffectProps {
  children: React.ReactNode;
  targetHeight: number;
}

export default function StretchAnimationEffect({ children, targetHeight }: StretchAnimationEffectProps) {
  const scrollPosition = useGetScrollPosition();

  return (
    <div
      className={`${styles.stretchAnimationEffect} ${
        scrollPosition <= targetHeight + 50 && scrollPosition >= targetHeight ? styles.target : ''
      }`}
    >
      {children}
    </div>
  );
}
