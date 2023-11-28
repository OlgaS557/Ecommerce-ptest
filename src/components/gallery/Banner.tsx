import React from 'react'
import styles from '../../css_modules/gallery/banner.module.css';
import Gallery from './Gallery';
import image1 from '../../Assets/img/homePage/gallery/running-shoes1.jpg';
import image2 from '../../Assets/img/homePage/gallery/running-shoes2.jpg';
import image3 from '../../Assets/img/homePage/gallery/running-shoes3.jpg';

const images = [
  {url: image1, description: 'running-shoes'},
  {url: image2, description: 'running-shoes'},
  {url: image3, description: 'running-shoes'},
]

const Banner = () => {
  return (
    <div className={styles.conteiner}>
      <span className={styles.nike}>NIKE</span>
      <div className={styles.conteiner_gallery}>
        <div className={styles.title}>AIR Beyond Compare</div>
        <div className={styles.gallery}>
          <Gallery  images = {images}/>
        </div>
      </div>
    </div>
  )
}

export default Banner