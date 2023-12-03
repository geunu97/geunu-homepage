'use client';

import styles from '@/styles/introSkillsSection.module.css';
import Image from 'next/image';
import StretchAnimationEffect from './StretchAnimationEffect';

export default function IntroSkillsSection() {
  const frontendSkills = [
    {
      name: 'Html',
      imageUrl: '/images/html.png',
    },
    {
      name: 'Css',
      imageUrl: '/images/css.png',
    },
    {
      name: 'Javascript',
      imageUrl: '/images/javascript.png',
    },
    {
      name: 'Typescript',
      imageUrl: '/images/typescript.png',
    },
    {
      name: 'React',
      imageUrl: '/images/react.png',
    },
    {
      name: 'Nextjs',
      imageUrl: '/images/nextjs.png',
    },
  ];

  return (
    <div className={styles.introSkillsSection}>
      <StretchAnimationEffect targetHeight={60}>
        <p className={`${styles.title} ephesis-font`}>Skills</p>
      </StretchAnimationEffect>
      <StretchAnimationEffect targetHeight={80}>
        <div className={`${styles.boxWrapper} exo2-font`}>
          <p className={styles.boxTitle}>Frontend</p>
          <div className={styles.skills}>
            {frontendSkills.map((frontendSkill) => (
              <div className={styles.skill} key={frontendSkill.name}>
                <Image src={frontendSkill.imageUrl} alt="" width={70} height={70} />
                <p>{frontendSkill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </StretchAnimationEffect>
    </div>
  );
}
