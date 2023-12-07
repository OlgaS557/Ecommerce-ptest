import { useRef, useState, useEffect } from 'react';
import styles from '../../css_modules/gallery/gallery.module.css';
import gradient1 from '../../Assets/img/homePage/gallery/gradient/Vector1.png';
import gradient2 from '../../Assets/img/homePage/gallery/gradient/Vector2.png';
import Button from './button';
import Counter from './counter';
import { useUpdateActiveIndex } from '../../hook/useUpdateActiveIndex';
import { useKeyEvents } from '../../hook/useKeyEvents';

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

const increaseIndex = (index: number, size: number) => Math.min(index + 1, size - 1);
const decreaseIndex = (index: number) => Math.max(0, index - 1);

// const Gallery: React.FC<{images:GalleryProps[]}> = ({images}) => {
const Gallery = ({images}: GalleryProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const conteinerRef = useRef<HTMLDivElement>(null);
    const scrollActiveIndex = useUpdateActiveIndex(conteinerRef);

    useEffect(() => {
        console.log(scrollActiveIndex);
        setActiveIndex(scrollActiveIndex)
    }, [scrollActiveIndex]);

    const buttonScroll = (newActiveIndex: number) => {
        const currentNode = conteinerRef?.current;
        if (!currentNode) {
            return
        }
        const dataConteiner = currentNode.getBoundingClientRect();
        //setActiveIndex(newActiveIndex);

        currentNode.scrollTo({
            left: newActiveIndex * dataConteiner.width,
            behavior: 'smooth',
        })
    }
    // hook for scrolling with a keys of keyboard
    useKeyEvents((key) => {
        if (key === 'Arrow-left') {
            buttonScroll(decreaseIndex(activeIndex));
        }
        if (key === 'Arrow-right') {
            buttonScroll(increaseIndex(activeIndex, images.length));
        }
    })

  return (
    <div className={ styles.gallery}>
        {/* <div className={styles.title}>AIR Beyond Compare</div> */}
        <div 
            className={styles.gallery_conteiner}
            ref={conteinerRef}
        >
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
        <div className={styles.navigation}> 
                <Button 
                    iconName='arrow-left'
                    disabled={activeIndex === 0}
                    onClick={() => buttonScroll(decreaseIndex(activeIndex))}
                />
                <Counter 
                    activeIndex={activeIndex + 1}
                    size={images.length}
                />
                <Button 
                    iconName='arrow-right'
                    disabled={activeIndex === images.length-1}
                    onClick={() => buttonScroll(increaseIndex(activeIndex, images.length))}
                />
        </div>
    </div>
  )
}

export default Gallery