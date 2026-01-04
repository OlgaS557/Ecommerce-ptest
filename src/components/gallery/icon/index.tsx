import cl from 'classnames';
import styles from '../../../css_modules/gallery/icon.module.css';
import { ComponentProps, IconName } from "../types/types";


interface IconProps extends ComponentProps {
    name: IconName;
}

export const Icon = ({name, className}: IconProps) => {
    return (
        <span className={cl(`${styles.icon} ${styles[name]} ${className}`)} />
    )
}

export default Icon;