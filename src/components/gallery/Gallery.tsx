import React from 'react';
import styles from '../../css_modules/gallery/gallery.module.css';

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

                </div>
            ) )}
        </div>
    </div>
  )
}

export default Gallery