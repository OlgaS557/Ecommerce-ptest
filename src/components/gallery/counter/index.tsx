import cl from 'classnames';
import styles from '../../../css_modules/gallery/counter.module.css';
import { ComponentProps } from '../types/types';

interface CounterProps extends ComponentProps {
    activeIndex: number;
    size: number;
}

const Counter = ({ activeIndex, size, className}: CounterProps) => {
    return (
        <div className={cl(`${styles.counter} ${className}`)}>
            {activeIndex}/{size}
        </div>
    )
}
export default Counter;