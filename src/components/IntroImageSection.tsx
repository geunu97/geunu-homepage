'use client'

import Image from 'next/image'
import styles from '../styles/introImageSection.module.css'
import useTextRotator from '../hooks/useTextRotator'

export default function IntroImageSection() {
  const introTexts = ['Frontend Developer.', 'Passionate Person.', 'Ambitious Person.']
  const introText = useTextRotator(introTexts, 100)

  return (
    <div className={styles.introImageSection}>
      <Image src="/images/cloud.gif" alt="소개 이미지" width={0} height={0} fill />
      <div className={styles.introContentSection}>
        <p className={`${styles.title} dosis-font`}>I'M Geunwoo AND I'M A</p>
        <p className={`${styles.subTitle} ephesis-font`}>{introText}</p>
      </div>
      <Image
        className={styles.arrow}
        src="https://static.wixstatic.com/media/c0bbc5_73187cb3bb2340d086ae42cf7e65dfc0~mv2.gif"
        width={40}
        height={40}
        alt="화살표 이미지"
      />
      <div className={styles.borderBottom} />
    </div>
  )
}
