'use client'

import styles from '../styles/introPortfolioSection.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ImageOverlay from './ImageOverlay'

export default function IntroPortfolioSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    pauseOnHover: true,
  }

  const portfolioItems = [
    {
      imageUrl: '/images/example1.png',
      title: 'Fleece Marigold 1',
      description: 'Which is worse, that everyone has his price, or that the price is always so low.',
    },
    {
      imageUrl: '/images/example2.png',
      title: 'Fleece Marigold 2',
      description: 'Which is worse, that everyone has his price, or that the price is always so low.',
    },
  ]

  return (
    <div className={styles.introPortfolioSection}>
      <p className={`${styles.title} ephesis-font`}>Portfolio</p>

      <Slider {...settings}>
        {portfolioItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <ImageOverlay imageUrl={item.imageUrl} title={item.title} description={item.description} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
