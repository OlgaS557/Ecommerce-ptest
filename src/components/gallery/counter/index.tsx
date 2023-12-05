import cl from 'classnames'
import { ComponentProps } from '../types/types'
import styles from '../../../css_modules/gallery/counter.module.css'

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