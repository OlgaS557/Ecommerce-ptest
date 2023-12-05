import cl from 'classnames';
import { IconName, ComponentProps } from "../types/types";
import styles from '../../../css_modules/gallery/icon.module.css';


interface IconProps extends ComponentProps {
    name: IconName;
}

export const Icon = ({name, className}: IconProps) => {
    return (
        <span className={cl(`${styles.icon} ${styles[name]} ${className}`)} />
    )
}

export default Icon;