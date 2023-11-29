import React from 'react'
import styles from '../styles/imageOverlay.module.css'
import Image from 'next/image'

interface ImageOverlayType {
  imageUrl: string
  title: string
  description: string
}

const ImageOverlay = ({ imageUrl, title, description }: ImageOverlayType) => (
  <figure className={styles.imageOverlay}>
    <div className={styles.wrapper}>
      <Image src={imageUrl} alt="포트폴리오 이미지" width={600} height={400} />
      <figcaption>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </figcaption>
    </div>
    {/* <a href="#">링크 넣기(깃허브 등)</a> */}
  </figure>
)

export default ImageOverlay
