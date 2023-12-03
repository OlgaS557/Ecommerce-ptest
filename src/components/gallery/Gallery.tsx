import React from 'react';
import styles from '../../css_modules/gallery/gallery.module.css';
import gradient1 from '../../Assets/img/homePage/gallery/gradient/Vector1.png';
import gradient2 from '../../Assets/img/homePage/gallery/gradient/Vector2.png';

// type GalleryProps = {
//     url: string;
//     description: string; 
// };
interface GalleryProps {
 images: {
    url: string;
    description: string;
 }[]
}

// const Gallery: React.FC<{images:GalleryProps[]}> = ({images}) => {

const Gallery = ({images}: GalleryProps) => {
  return (
    <div className={ styles.gallery}>
        {/* <div className={styles.title}>AIR Beyond Compare</div> */}
        <div className={styles.gallery_conteiner}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={styles.conteiner_item}
                >
                    <img
                        src={image.url}
                        alt={image.description} 
                    />
                    <div className={styles.gradientContainer}>
                        <div className={`${styles.gradient} ${styles.lower_gradient}`}></div>
                        <div className={`${styles.gradient} ${styles.upper_gradient}`}></div>
                    </div>
                </div>
            ) )}
        </div>
    </div>
  )
}

export default Gallery